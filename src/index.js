/*
 * Entry point of the command line tool.
 * Fetch & display the first 20 even numbered TODOs.
 */
const { getEvenNumberedTodos } = require("./services/todo.service");
const { displayTodo } = require("./utils/printer");

async function main() {
  try {
    const evenNumberedTodos = await getEvenNumberedTodos(20);

    evenNumberedTodos.map((todo, index) => {
      displayTodo(todo, index);
    });
  } catch (error) {
    console.error(error.message);
  }
}

main();
