const passport = require("passport");
const dotenv = require("dotenv");
const User = require("../models/User");
const mongoose = require("mongoose");

dotenv.config();

const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook").Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  var userId = mongoose.Types.ObjectId(id);
  User.findById(userId, function(err, user) {
    done(err, user);
  });
});

//google oAuth strategy

passport.use(
  new GoogleStrategy(
    {
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    },

    (accessToken, refreshToken, profile, done) => {
      console.log("google fired");
      //check if user already exists
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          //already have the user
          console.log("user is: ", currentUser);
          done(null, currentUser);
        } else {
          //if not create user in our db
          new User({
            name: profile.name.givenName,
            googleId: profile.id,
            avatar: profile.photos[0].value
          })
            .save()
            .then(newUser => {
              console.log("new user created" + newUser);
              done(error, newUser);
            });
        }
      });
    }
  )
);

/// Facebook
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.CLIENT_ID_FB,
      clientSecret: process.env.CLIENT_SECRET_FB,
      callbackURL: process.env.FB_CALLBACK_URL,
      profileFields: ["id", "name", "photos"]
    },

    (accessToken, refreshToken, profile, done) => {
      console.log("facebook fired");
      User.findOne({ facebookId: profile.id }).then(currentUser => {
        if (currentUser) {
          console.log("fb user is: ", currentUser);
          done(null, currentUser);
        } else {
          new User({
            name: profile.name.givenName,
            facebookId: profile.id,
            avatar: profile.photos[0].value
          })
            .save()
            .then(newUser => {
              console.log("new fb user created " + newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
