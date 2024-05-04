/*
 * Function to print the information of a TODO.
 * @param {Object} todo - The TODO object to print.
 * @param {number} index - The index of the TODO in the list.
 */
const displayTodo = (todo, index) => {
    console.log(`${index + 1}. ${todo.title} - Completed status: ${todo.completed}`);
};

module.exports = { displayTodo };