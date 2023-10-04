# ChatGPT Integration for Mobile Troubleshooting

## Overview

This project is a web application that utilizes the OpenAI GPT-3.5 Turbo model to generate chat responses based on user input. It has been specifically designed to assist users in troubleshooting mobile-related issues. The application consists of both a front-end component (in the "public" directory) and a back-end server (in the "server" directory) to interact with the OpenAI API.

## Project Structure

```
- root
  - node_modules
  - public
    - img
    - index.html
    - script.js
    - styles.css
  - server
    - index.js
  - .env
  - .gitignore
  - package-lock.json
  - package.json
```

- `node_modules`: Directory containing project dependencies.

- `public`: Directory containing the web application's front-end files.

- `server`: Directory containing the back-end server code.

- `.env`: File for storing environment variables, including the OpenAI API key.

- `.gitignore`: File specifying which files and directories should be ignored by Git.

- `package-lock.json`: Auto-generated file to track package versions.

- `package.json`: Configuration file for the Node.js project.

## Getting Started

Follow these steps to set up and run the project:

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 2. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/Vinoth82003/ChatGPT-Integration
```

### 3. Install Dependencies

Navigate to the project's root directory and install the dependencies:

```bash
cd ChatGPT-Integration
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the project's root directory and add the following content:

```env
API_KEY=your_openai_api_key_here
PORT=3000
```

Replace `your_openai_api_key_here` with your actual OpenAI API key. You can obtain an API key by following the instructions below.

### 5. Obtain OpenAI API Key

To get an API key from OpenAI:

1. Visit the [OpenAI website](https://beta.openai.com/).
2. Sign in to your account or create one if you don't have one.
3. Once logged in, navigate to the API section to create a new API key.
4. Copy the API key and paste it into your `.env` file.

### 6. Run the Project

Start the development server:

```bash
node server/index.js
```

This will start the server, and your web application will be accessible at `http://127.0.0.1:3000` by default.

### 7. Interact with the Application

You can interact with the web application by visiting the URL in your web browser or by using a tool like `curl`. You can also interact with it through the command line by following the prompts.

## Troubleshooting

If you find that the application is not responding to your input or if it's been unresponsive for an extended period, here are some steps to troubleshoot the issue:

1. **Check Browser Developer Tools**:
   - Open the developer tools of your web browser (usually by pressing `F12` or right-clicking and selecting "Inspect").
   - Look for any error messages or warnings in the console. These messages can provide clues about what might be going wrong.

2. **Reload the Page**:
   - Sometimes, a simple page refresh can resolve issues. Press `F5` or click the browser's refresh button to reload the page.

3. **Resend Your Message**:
   - If the application is still not responding after a refresh, try sending your message again. It's possible that the issue was temporary.

4. **Check Your API Key**:
   - One common error is an "API Key expired" error. Ensure that your API key in the `.env` file is valid and has not expired.

By following these steps, you can often resolve minor issues with the application. If the problem persists or you encounter other errors, please feel free to reach out for further assistance.

Remember, the most common issue is related to the API key, so double-check its validity first.

## Usage

This web application is designed to assist users in troubleshooting mobile-related issues. Simply enter your mobile device issue or question, and the application will provide relevant troubleshooting suggestions and solutions.

## License

This project is licensed under the [MIT License](LICENSE).
