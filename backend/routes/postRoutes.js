import express from "express";
import { addPost, getPosts } from "../controllers/postController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, admin, addPost).get(getPosts);
export default router;
