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
    res.status(404);
    throw new Error("Invalid post data");
  }
});
//@desc get all posts
//@route  GET /api/posts/
//@access  public
const getPosts = AsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        title: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const posts = await Post.find({ ...keyword }).sort({ createdAt: -1 });
  res.status(201).json(posts);
});

//@desc get  post BY ID
//@route  GET /api/post/:id
//@access  public
const getPostById = AsyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.status(201).json(post);
  } else {
    res.status(404);

    throw new Error("Post not found");
  }
});
//@desc get  post BY category
//@route  GET /api/post/category
//@access  public
const getPostByCategory = AsyncHandler(async (req, res) => {
  const myCategory = req.query.category
   
  const post = await Post.find({}).where("category").equals(myCategory);
  if (post) {
    res.status(201).json(post);
  } else {
    res.status(404);

    throw new Error("Post not found");
  }
});
//@desc update  post
//@route  PUT /api/posts/:id
//@access  public

const updatePost = AsyncHandler(async (req, res) => {
  const { title, image, category, post } = req.body;

  const postText = await Post.findById(req.params.id);
  if (postText) {
    post.title = req.body.title || post.title;
    post.image = req.body.image || post.image;
    post.category = req.body.category || post.category;
    post.post = req.body.post || post.post;
  }
  const updatedPost = await postText.save();
  res.status(201).json({
    _id: updatedPost._id,
    title: updatedPost.title,
    image: updatedPost.image,
    category: updatedPost.category,
    post: updatedPost.post,
    author: req.user._id,
  });
});

//@desc delete  post
//@route  DELETE /api/posts/:id
//@access  public

const deletePost = AsyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    await post.remove();
  } else {
    res.statuus(404);
    throw new Error("Post not found");
  }
});

export {
  addPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getPostByCategory,
};
