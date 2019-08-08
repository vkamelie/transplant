const express = require("express");

const router = express.Router();
const passport = require("passport");

//auth login

router.get("/", async (req, res) => {
  try {
    res.send("hi 2.0");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error, at route.get");
  }
});
//google logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

//login page
router.get("/login", (req, res) => {
  res.send("login comp");
});

// auth with google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  //handle with passport

  res.redirect("/api/profile");
});

router.get("/facebook", passport.authenticate("facebook"), (req, res) => {
  res.send("facebook log in page");
});

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/api/profile",
    failureRedirect: "/login"
  })
);

module.exports = router;
