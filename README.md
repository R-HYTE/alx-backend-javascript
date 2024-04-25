# Setup Guide for Node.js, Jest, Babel, and ESLint

This README section provides detailed steps to install Node.js, Jest, Babel, and ESLint in your JavaScript project to enhance testing capabilities, utilize modern JavaScript features, and maintain code quality.

## Prerequisites

Before you start, you need to install Node.js. Follow these steps to install Node.js version 12.11.x on your machine.

### Install Node.js 12.11.x

1. **Download the Node.js setup script**:
    Open a terminal and run the following commands in your home directory:

    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```

2. **Verify the installation**:
    Check the installed versions of Node.js and npm:

    ```bash
    nodejs -v
    # Expected output: v12.11.1

    npm -v
    # Expected output: 6.11.3
    ```
## In your project directory

Install Jest, Babel and ESList by using the supplied package.json and run npm install

## Installation and Configuration

1. **Modify `package.json`**:
    Add the following dependencies and scripts to your `package.json`. If this file does not exist, create it.

    ```json
    {
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
      },
      "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
      }
    }
    ```

2. **Install Dependencies**:
    Run the following command to install the necessary dependencies:
    
    ```bash
    npm install
    ```

3. **Babel Configuration**:
    Create a `babel.config.js` in your project directory with the following content:

    ```javascript
    module.exports = {
      presets: [
        ['@babel/preset-env', {
          targets: {
            node: 'current',
          },
        }],
      ],
    };
    ```

4. **ESLint Configuration**:
    Create a `.eslintrc.js` file with the following configuration:

    ```javascript
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides: [
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };
    ```

## Usage

With all configurations in place, you can use the defined npm scripts for different tasks:

- **Lint your JavaScript files**: `npm run lint`
- **Run tests with Jest**: `npm test`
- **Run your application with Babel**: `npm run dev`

These tools help enforce code quality standards, run modern JavaScript syntax, and facilitate efficient testing in your development workflow.
