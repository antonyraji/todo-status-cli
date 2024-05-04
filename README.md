# CLI for Todo status

## Overview

The Todos Ststus Cli is a Command Line Tool in a Node.js.
This will get and display the first 20 even numbered TODOs from a provided API.

## Installation

To install the application:

1. Clone the repository
2. Run `cd todo-status-cli` to go to the root directory of the project 
3. Run `npm install` to install the required dependencies.

## Running the application

To run the application in docker container, use the below command:

prerequisite:

docker & docker-compose should be installed in the local system.

This will run the app & display default count(20) of todos

```
docker-compose up
```

This will run the app with custom count of todos

```
docker-compose run todo-cli 10
```

### Run application locally
prerequisite:

This expects nodejs 20.10.0 to be installed in the local system . or modify the .tool-version file with your installed version.


This will run the app & display default count(20) of todos

```
node start
```

This will run the app with custom count of todos

```
node start 10
```

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
