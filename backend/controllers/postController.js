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
//@desc get top post
//@route  GET /api/posts/
//@access  public
const getTopPost = AsyncHandler(async (req, res, next) => {
  const topPost = await Post.find({}).sort({ createdAt: -1 }).limit(1);

  res.status(201).json(topPost);
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
  const myCategory = req.query.category;

  const post = await Post.findOne({}).where("category").equals(myCategory);
  if (post) {
    res.status(201).json(post);
  } else {
    res.status(404);

    throw new Error("Post not found");
  }
});
//@desc get  post by business category
//@route  GET /api/post/category/business
//@access  public
const getPostByBusiness = AsyncHandler(async (req, res) => {
  const post = await Post.find({ category: "business" })
    .sort({ createdAt: -1 })
    .limit(1);
  if (post) {
    res.status(201).json(post);
  } else {
    res.status(404);

    throw new Error("Post not found");
  }
});
//@desc get  post by trending category
//@route  GET /api/post/category/trending
//@access  public
const getPostByTrending = AsyncHandler(async (req, res) => {
  const post = await Post.find({ category: "trending" })
    .sort({ createdAt: -1 })
    .limit(1);

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
  const post = await Post.findById(req.params.id);
  if (post) {
    post.title = req.body.title || post.title;
    post.image = req.body.image || post.image;
    post.category = req.body.category || post.category;
    post.post = req.body.post || post.post;
  }
  const updatedPost = await post.save();
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
    res.status(201).json(post);
  } else {
    res.status(404);
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
  getTopPost,
  getPostByBusiness,
  getPostByTrending,
};
