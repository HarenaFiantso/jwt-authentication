import express from "express";
import { login } from "../controllers/auth.controller.js";
import { register } from "module";

const authRoute = express.Router();

authRoute.post("/login", login);
authRoute.post("/register", register);

export default authRoute
