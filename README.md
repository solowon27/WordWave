# WordWave
"WordWave is a state-of-the-art Progressive Web App (PWA) designed to provide a seamless and intuitive text editing experience, right in your browser. 
# Table of Contents
-[Features](#features)
-[Getting Started](#GettingStarted)
-[Usage](#usage)
-[Deployed Link](#DeployedLink)
-[Database](#database)
-[Screenshots](#screenshots)
-[Contributing](#contributing)
-[License](#license)
-[Contact](#contact)

## Features
- Effortless Text Editing: Write, edit, and format your text effortlessly with Word Wave's clean and intuitive interface.

- Save Your Content: Word Wave automatically saves your content, so you never lose your work, even if you accidentally close the app.

- IndexedDB Integration: Seamlessly store and retrieve your text with IndexedDB, ensuring data persistence across sessions.

- Responsive Design: Use Word Wave on both desktop and mobile devices, with an installation option for your mobile home screen.

- Beautiful User Interface: Enjoy a visually pleasing and distraction-free environment for your writing tasks.

## Getting Started
To get started with Word Wave, either use the deployed website on heroku or clone it and try it in your local machine

1. Clone this repository to your local machine.

```git@github.com:solowon27/WordWave.git```

and then follow instruction in package.json scripts

2. use the deployed [link](https://blooming-lake-26826-01602545f49f.herokuapp.com/) 

## Usage
Word Wave is designed to be straightforward to use:

-- Write Text: Use the text area to write or edit your content. Line numbers help you keep track.

-- Save Content: Click the "Save" button to save your text to the database. Your content will be available even after you close the app.

-- Install as PWA (Mobile Only): On your mobile device, click the "Install!" button or the install image to add Word Wave to your home screen for easy access.

## Deployed Link

https://blooming-lake-26826-01602545f49f.herokuapp.com/
## Database

Word Wave utilizes IndexedDB for data storage. It automatically creates a database called WordWaveDB and a store named EditorContent. 

You don't need to worry about data loss; your content is saved securely.

## Screenshots

![Lighthouse](/client/Asset/lighthouse.jpg)
![manifest-1](/client/Asset/manifest-1.jpg).
![manifest-2](/client/Asset/manifest-2.jpg)
![workbox-precach](/client/Asset/workbox-precache.jpg)
![service workers](/client/Asset/service%20workers.jpg)
![database](/client/Asset/database.jpg)

## Contributing
Contributions are welcome! If you find any issues or improvements, feel free to open a pull request.

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name,
3. Commit your changes: git commit -m 'Add some feature',
4 . Push to the branch: git push origin feature/your-feature-name,
5. Open a pull request.

## License

This project is licensed under the MIT License

## Contact 

For inquiries, suggestions, or feedback, please reach out here [solowon27@hotmail.com] or [https://www.linkedin.com/in/solomon-tegegne-7b347027a/]. Thank you

