# Translator App

## Overview

This Translator App allows users to easily translate text between different languages. It provides a simple and elegant user interface with a multilingual greeting screen. The app supports language selection, text input, and text translation using an external translation API.
## slide: https://gamma.app/docs/React-Based-Multilingual-Translator-App-mlfpdp8ikxy8gef
## video demo: https://drive.google.com/file/d/12x0o-DfdMasdgXG47c7YaVMmsb4jDH4j/view?usp=drive_link
## deployed app link: https://multilangtranslator.netlify.app/

## Features

- **Multilingual Greetings:** The app greets the user in various languages (e.g., English, Georgian, Zulu, Swahili, Japanese, Spanish) on the initial screen.
- **Language Selection:** Users can select a source language and a target language for translation.
- **Text Input:** The app allows users to enter text that they want to translate. A character limit of 200 characters is enforced.
- **Translation:** The app uses an external API to perform translation and display the result.
- **Language Swap:** Users can swap the source and target languages with a button click.
- **Responsive UI:** The app is responsive, designed to adapt to both small and large screen sizes.

## Technologies Used
1. React JS - for User interface
2. TailwindCss for styling
3. MyMemory API for the translation service

## Installation

**Setup Instructions**
To run this project locally, follow the instructions below:

**1. Clone the repository**
git clone https://github.com/your-username/translator-app.git 
cd translator-app

**2. Install dependencies**
Install the necessary packages using npm or yarn:


 npm install 
 or 
 yarn install

**3. Run the application**
Once the dependencies are installed, start the development server:


 *npm start* 
 or
 *yarn start*

This will open the app in your browser at http://localhost:3000.

 ##  Project Structure
**App.js:** The main entry component of the app. It handles the state to toggle between the introductory screen and the translator interface.
**TranslatorStart.js:** Displays the greeting screen and a "Start" button to enter the translation interface.
**TranslatorApp.js:** The core of the app. It handles language selection, text input, text translation, and the swap functionality.
**languagesData.js:** A list of language codes and their corresponding names, used for language selection.

## Core Components
**App.js**
This is the root component that controls whether the app shows the greeting screen (TranslatorStart) or the translation screen (TranslatorApp). It toggles the state using the useState hook.

**TranslatorStart.js**
The greeting screen that welcomes users in multiple languages. The "Start" button triggers the onStart function to navigate to the translation interface (TranslatorApp).

**TranslatorApp.js**
This component is the translation interface, which contains:

**Language Selection:** The user can select the source and target languages.
**Text Input:** The user can enter text to be translated.
**Text Translation:** Translates the input text via an external translation API.
**Language Swap:** Swaps the source and target languages when clicked.

## Key Features and Functionality
**Language Selection:**
Users can choose the source and target languages using a dropdown. The languagesData.js file contains the language codes and names.

**Text Translation:**
The app uses the MyMemory API for translation. The API is called via fetch() when the user submits the text to be translated.

**Text Input:**
A textarea is provided for input, with a character limit of 200. The user is shown the character count in real-time.

**Language Swap:**
A button allows users to swap the source and target languages.

**External API**
The app uses the MyMemory Translation API for performing text translations. The translation request is sent as follows:

https://api.mymemory.translated.net/get?q={text}&langpair={source_language}|{target_language}
This API is free and does not require an API key.

## How the App Works
The user starts by clicking the "Start" button on the landing page (TranslatorStart).
This triggers the display of the translation interface (TranslatorApp), where the user can select source and target languages.
The user types in text, and the app makes an API call to the MyMemory translation service to translate the text.
The translated text is then displayed on the screen.

## Contributing
Feel free to fork the repository and submit pull requests if you want to contribute. Any improvements or bug fixes are welcome!

Fork the repository.
Create a new branch (git checkout -b feature-name).
Make your changes.
Commit your changes (git commit -am 'Add feature').
Push to the branch (git push origin feature-name).
Create a new pull request.



