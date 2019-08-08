const express = require("express");
const router = express.Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    //if user is not logged in
    res.redirect("/auth/login");
  } else {
    //if logged in
    next();
  }
};

router.get("/profile", authCheck, (req, res) => {
  // res.render("profile", { user: req.user });
  res.send(req.user.name);
});

module.exports = router;
