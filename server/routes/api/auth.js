const express = require("express");
const router = require("express-promise-router")();

const passport = require("passport");
const passportConf = require("../../passport-setup");

const UsersController = require("../../controllers/users");
const passportJWT = passport.authenticate("jwt", { session: false });

router
  .route("/google")
  .post(
    passport.authenticate("googleToken", { session: false }),
    UsersController.googleAuth
  );

router
  .route("/facebook")
  .post(
    passport.authenticate("facebookToken", { session: false }),
    UsersController.facebookAuth
  );

router.route("/secret").get(passportJWT, UsersController.secret);

module.exports = router;
