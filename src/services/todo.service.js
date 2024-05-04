const axios = require('axios');

/*
 * Fetch a TODO by ID.
 * @param {number} id - The ID of the TODO.
 * @returns {Object} - The TODO object.
 * @throws {Error} - on fetching the TODO fails.
 */
const getTodoById = async (id) => {
  try {
    const todoResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return todoResponse.data;
  } catch (error) {
    throw new Error(`Failed to fetch TODO with ID ${id}: ${error.message}`);
  }
};

/*
 * Fetch even numbered Todos
 * @param {number} count - The number of even numbered TODOs to fetch.
 * @returns - Array of even numbered TODO objects.
 * @throws {Error} - on fetching the TODOs fails.
 */
const getEvenNumberedTodos = async (count) => {
  console.log("Please wait.... while we are getting the todos.");

  try {
    const evenNumberedTodos = await Promise.all(
      Array.from({ length: count }, async (_, i) => {
        let index = 2; // Start from index 2, i.e, first even number
        index += i * 2;
        const todo = await getTodoById(index);
        if (todo.id % 2 === 0) {
          return todo;
        }
      })
    );

    // Filter out any undefined values
    const filteredTodos = evenNumberedTodos.filter(Boolean);

    console.log(`The total number of todos fetched: ${filteredTodos.length}`);
    return filteredTodos;
  } catch (error) {
    throw new Error(`Failed to fetch the TODO: ${error.message}`);
  }
};


module.exports = { getTodoById, getEvenNumberedTodos };