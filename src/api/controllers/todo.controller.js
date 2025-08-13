import { readData } from "../utils/file-handler.js";

const getAllTodo = async (_req, res) => {
  try {
    const data = await readData("todos.json");
    res.json(data.todos);
  } catch (err) {
    console.error("Error reading file:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const createTodo = () => { }

const updateTodo = () => { }

const deleteTodo = () => { }

export { getAllTodo, createTodo, updateTodo, deleteTodo }
