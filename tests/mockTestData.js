/*
 * mocked data for testing getTodoById
 */
const getTodoByIdData = () => {
  return { userId: 1, id: 1, title: "test title one", completed: false };
};

/*
 * Mocked data to test getEvenNumberedTodos
 * @param {number} num - Number of fake TODOs to generate, defaults to 0
 * @returns {Array} - Array of fake TODO objects
 */
const getEvenNumberedTodosData = async (num = 0) => {
  const todosData = [
    { userId: 1, id: 1, title: "title one", completed: false },
    { userId: 1, id: 2, title: "title two", completed: false },
    { userId: 1, id: 3, title: "title three", completed: false },
    { userId: 2, id: 4, title: "title four", completed: true },
    { userId: 2, id: 5, title: "title five", completed: true },
    { userId: 2, id: 6, title: "title six", completed: true },
  ];

  return num >= 0 ? todosData.slice(0, num) : [];
};


module.exports = { getTodoByIdData, getEvenNumberedTodosData };
