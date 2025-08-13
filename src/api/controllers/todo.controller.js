import { readData, writeData } from "../utils/file-handler.js";
import crypto from "crypto";

const getAllTodos = async (req, res) => {
  try {
    const data = await readData("todos.json");
    res.json(data.todo);
  } catch (err) {
    console.error("Error reading file:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const data = await readData("todos.json");
    const newTodo = { id: crypto.randomUUID(), title, description, completed: false };

    data.todo.push(newTodo);

    writeData("todos.json", data);

    res.status(201).json(newTodo);
  } catch (err) {
    console.error("Error writing file:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, completed } = req.body;

    if (!title || !description || typeof completed !== "boolean") {
      return res.status(400).json({ error: "All fields are required and completed must be a boolean" });
    }

    const data = await readData("todos.json");
    const todoIndex = data.todo.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    data.todo[todoIndex] = { ...data.todo[todoIndex], title, description, completed };

    writeData("todos.json", data);

    res.json(data.todo[todoIndex]);
  } catch (err) {
    console.error("Error updating todo:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await readData("todos.json");

    const todoIndex = data.todo.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const deletedTodo = data.todo.splice(todoIndex, 1)[0];

    writeData("todos.json", data);

    res.json({
      message: "Todo deleted successfully",
      deleted: deletedTodo,
    });
  } catch (err) {
    console.error("Error deleting todo:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export { getAllTodos, createTodo, updateTodo, deleteTodo };
