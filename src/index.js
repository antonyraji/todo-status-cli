/*
 * Entry point of the command line tool.
 * Fetch & display the first 20 even numbered TODOs.
 */
const { getEvenNumberedTodos } = require("./services/todo.service");
const { displayTodo } = require("./utils/printer");

async function main() {
  try {
    // Reading command-line argument (first arg)
    const numberOfTodos = parseInt(process.argv[2]);

    if (isNaN(numberOfTodos) || numberOfTodos <= 0) {
      console.error("Please provide a valid number of todos.");
      return;
    }

    const evenNumberedTodos = await getEvenNumberedTodos(numberOfTodos);

    evenNumberedTodos.forEach((todo, index) => {
      displayTodo(todo, index);
    });
  } catch (error) {
    console.error(error.message);
  }
}

main();
