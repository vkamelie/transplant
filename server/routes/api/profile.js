const express = require("express");
const router = express.Router();
const User = require("../../../models/User");

const passport = require("passport");
const passportConf = require("../../passport-setup");

const passportJWT = passport.authenticate("jwt", { session: false });

///@route current users profile api/user/profile/me
//@access private
router.get("/profile/me", passportJWT, async (req, res) => {
  try {
    const profile = await User.findById(req.user.id);
    console.log(profile);
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.get("/profile/me/:user_id", passportJWT, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.user.id });
    return res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
