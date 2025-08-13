import { readData } from "../utils/file-handler.js";

const getAllTodo = (_req, res) => {
  try {
    const data = readData("todos.json")
    res.json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading file", error);
  }
}

const createTodo = () => { }

const updateTodo = () => { }

const deleteTodo = () => { }

export { getAllTodo, createTodo, updateTodo, deleteTodo }
