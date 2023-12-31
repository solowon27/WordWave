import { Workbox } from 'workbox-window';
import '../css/styles.css';

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  const workboxSW = new Workbox('./sw.js');
  workboxSW.register();
} else {
  console.error('Service workers are not supported in this browser.');
}
