const axios = require("axios");
const { getTodoById, getEvenNumberedTodos } = require("../../src/services/todo.service");
const { getEvenNumberedTodosData } = require("../mockTestData");

jest.mock("axios");

describe("getTodoById", () => {
  it("fetches a single TODO item by ID", async () => {
    const mockTodo = {
      userId: 1,
      id: 1,
      title: "test title one",
      completed: false,
    };
    axios.get.mockResolvedValueOnce({ data: mockTodo });

    const todo = await getTodoById(1);

    expect(todo).toEqual(mockTodo);
  });

  it("throws an error when fetching a TODO item fails", async () => {
    const errorMessage = "Failed to fetch TODO with ID 1: Not found";
    axios.get.mockRejectedValueOnce(new Error("Not found"));

    await expect(getTodoById(1)).rejects.toThrow(errorMessage);
  });
});

describe("getEvenNumberedTodos", () => {
  it("fetches empty todo for count 0", async () => {
    const mockTodos = await getEvenNumberedTodosData();

    axios.get.mockImplementation((url) => {
      if (url.startsWith("https://jsonplaceholder.typicode.com/todos/")) {
        const id = parseInt(url.split("/").pop());
        return Promise.resolve({ data: mockTodos[id - 1] });
      }
      return Promise.reject(new Error("Invalid URL"));
    });

    const evenNumberedTodos = await getEvenNumberedTodosData(); 

    expect(evenNumberedTodos).toHaveLength(0);
  });

  it("fetches the first 2 even numbered TODOs", async () => {
    const mockTodos = await getEvenNumberedTodosData(2);

    //axios.get to return a mocked promise
    axios.get.mockImplementation((url) => {
      if (url.startsWith("https://jsonplaceholder.typicode.com/todos/")) {
        const id = parseInt(url.split("/").pop());
        return Promise.resolve({ data: mockTodos[id - 1] });
      }
      return Promise.reject(new Error("Invalid URL"));
    });

    const evenNumberedTodos = await getEvenNumberedTodosData(2); 

    expect(evenNumberedTodos).toHaveLength(2);
    evenNumberedTodos.forEach((todo, index) => {
      expect(todo).toEqual(mockTodos[index]);
    });
  });

  it("throws an error when fetching even numbered TODOs fails", async () => {
    const errorMessage = "Failed to fetch the TODO";
    axios.get.mockRejectedValueOnce(new Error("Not found"));

    await expect(getEvenNumberedTodos(2)).rejects.toThrow(errorMessage);
  });
});
