const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Post = require("../../../models/Post");
const User = require("../../../models/User");

// @route post api/posts
//create a post
router.post(
  "/",
  [
    check("text", "Text is required")
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id);

      const newPost = new Post({
        title: req.body.title,
        text: req.body.text,
        name: req.body.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Sever Error, post");
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
