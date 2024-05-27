# Password Generator

A simple password generator application built with React and Vite. This application allows users to generate secure passwords with customizable options such as length and inclusion of uppercase letters, lowercase letters, numbers, and symbols.

## Features

- Select password length (8-50 characters)
- Include/exclude uppercase letters
- Include/exclude lowercase letters
- Include/exclude numbers
- Include/exclude symbols
- Generate password button
- Copy generated password to clipboard

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download Node.js from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/premlalwani09/Password-Generator
   cd password-generator

2. Install the dependencies:
    ```sh
    npm install

3. Start the development server:
    ```sh
    npm run dev

This will start the development server, and you can view the app by navigating to http://localhost:5173 in your web browser.


## Component Details

### PasswordGenerator.jsx

This is the main component of the application. It includes the following functionalities:

- State management using useState for password options - and the generated password.
- Password generation logic.
- Clipboard copy functionality using the navigator.clipboard.writeText API.
- Responsive UI elements for user interaction.

### App.jsx

This component simply renders the PasswordGenerator component.

### main.jsx

This is the entry point of the application where the App component is rendered into the DOM.

### PasswordGenerator.css

Contains the basic styles for the application to ensure a clean and user-friendly UI.