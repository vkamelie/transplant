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
router.get("/:id", async (req, res) => {
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

module.exports = router;
