import Post from "../models/Posts.js";
import AsyncHandler from "express-async-handler";

//@desc add post n
//@route  POST /api/posts/
//@access  admin

const addPost = AsyncHandler(async (req, res) => {
  const { title, category, image, post } = req.body;
  const postExists = await Post.findOne({ title });
  if (postExists) {
    res.status(400);
    throw new Error("Post with given title already exists");
  }
  const postText = await Post.create({
    title,
    category,
    image,
    post,
    author: req.user._id,
  });
  if (post) {
    res.status(201).json(postText);
  } else {
    res.status(401);
    throw new Error("Invalid post data");
  }
});

const getPosts = AsyncHandler(async (req, res) => {
  const posts = await Post.find({}).sort({ createdAt: -1 });
  res.status(201).json(posts);
});

export { addPost ,getPosts};
