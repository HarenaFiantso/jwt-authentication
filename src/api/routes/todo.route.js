import express from "express";
import { createTodo, deleteTodo, getAllTodo, updateTodo } from "../controllers/todo.controller.js";

const todoRoute = express.Router();

todoRoute.get("/", getAllTodo);
todoRoute.post("/", createTodo);
todoRoute.put("/:id", updateTodo);
todoRoute.delete("/:id", deleteTodo);

export default todoRoute;
