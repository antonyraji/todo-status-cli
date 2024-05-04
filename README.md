# CLI for Todo status

## Overview

The Todos Ststus Cli is a Command Line Tool in a Node.js.
This will get and display the first 20 even numbered TODOs from a provided API.

## Installation

To install the application:

1. Clone the repository
2. Run `cd todo-status-cli` to go to the root directory of the project 
3. Run `npm install` to install the required dependencies.

## How to run the tests

To run the tests, use the below command:

```
npm test
```

## Main Function

The main function is in the `index.js` file, which is responsible for initiate the fetching and displaying of the todos.

## Project Structure

```
./src
│   ├── services
│   │   └── todo.service.js
│   ├── index.js
│
./utils
│   ├── printer.js
│
./tests
│   ├── services
│       ├── todo.service.test.js
│   ├── mockTestData.js
```
---
