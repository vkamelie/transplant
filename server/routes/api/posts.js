const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Post = require("../../../models/Post");
const User = require("../../../models/User");
const passport = require("passport");
const passportConf = require("../../passport-setup");

const passportJWT = passport.authenticate("jwt", { session: false });

// @route post api/posts
//create a post
router.post(
  "/users",
  [
    passportJWT,
    [
      check("title", "Title is required")
        .not()
        .isEmpty(),
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
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
        name: user.name,
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

//@get api/posts
//@get all posts
//@access public

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Sever Error, post");
  }
});

//@get api/posts/:id
//@des get posts by id
//@access public
router.get("users/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ msg: "post not found" });
    }
    res.json(post);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "post not found" });
    }
    res.status(500).send("Server Error, post by id");
  }
});

//@route Delete api/posts:id
//@desc delete a post
//@access Private

router.delete("users/:id", passportJWT, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    //check on user
    if (post.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await post.remove();
    res.json({ msg: "Post removed" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "post not found" });
    }
    res.status(500).send("Server Error");
  }
});

//@route put api/posts/like/:id
//@desc like a post
//@access Private

router.put("users/like/:id", passportJWT, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check if post has already been liked by user
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(404).json({ msg: "Post already liked" });
    }
    post.likes.unshift({ user: req.user.id });

    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route put api/posts/unlike/:id
//@desc like a post
//@access Private

router.put("users/unlike/:id", passportJWT, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    //check if post has already been liked by user
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(404).json({ msg: "Post has not yet been liked" });
    }
    //get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();
    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route post api/posts/users/comment/:id
//create a post
router.post(
  "/users/comment/:id",
  [
    passportJWT,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id);
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Sever Error, post");
    }
  }
);

// @route delete api/posts/users/comment/:id/:comment_id
//delete a comment
//@access private

router.delete(
  "/users/comment/:id/:comment_id",
  passportJWT,
  async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);

      //pull out comment
      const comment = post.comments.find(
        comment => comment.id === req.params.comment_id
      );

      //make sure comment exits
      if (!comment) {
        return res.status(404).json({ msg: "Comment does not exist" });
      }

      //check user
      if (comment.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: "User not authorized " });
      }

      //get remove index
      const removeIndex = post.comments
        .map(comment => comment.id)
        .indexOf(req.params.comment_id);

      post.comments.splice(removeIndex, 1);

      await post.save()

      res.json(post.comments)
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
