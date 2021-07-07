import express from "express";
import {
  addPost,
  deletePost,
  getPostByCategory,
  getPostById,
  getPosts,
  updatePost,
} from "../controllers/postController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").post(protect, admin, addPost).get(getPosts);
router.route("/categories").get(getPostByCategory);

router
  .route("/:id")
  .get(getPostById)
  .put(protect, admin, updatePost)
  .delete(protect, admin, deletePost);

export default router;
