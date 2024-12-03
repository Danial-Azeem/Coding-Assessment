import express from "express";
import dotenv from "dotenv";
import { verifyToken } from "../middleware/auth.js";
import { getPosts, login, userInfo } from "../controllers/usersController.js";

dotenv.config();
const router = express.Router();

router.post("/login", login);

router.get("/posts", getPosts);

// protected route
router.get("/user-info", verifyToken, userInfo);

export default router;
