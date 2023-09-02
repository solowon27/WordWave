import { openDB } from 'idb';

const DB_NAME = 'WordWaveDB';
const STORE_NAME = 'EditorContent';

const initdb = async () => {
  console.log('Initializing database...');
  openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        console.log(`${STORE_NAME} database created`);
      } else {
        console.log(`${STORE_NAME} database already exists`);
      }
    },    
  });
};

export const saveText = async (content) => {
  try {
    const timestamp = new Date().toISOString();
    const db = await openDB(DB_NAME, 1);
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const result = await store.add({ content, timestamp });
    console.log('Content saved to the database', result);
  } catch (err) {
    console.error("Error saving content to the database:", err);
  }
};

export const getLastSavedText = async (callback) => {
  try {
    const db = await openDB(DB_NAME, 1);
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const result = await store.getAll();
    if (result.length > 0) {
      const lastSavedContent = result[result.length - 1].content;
      callback(lastSavedContent);
    }
  } catch (err) {
    console.error("Error retrieving content from the database:", err);
  }
};

initdb();
