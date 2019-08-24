const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const GoogleStrategy = require("passport-google-plus-token");
const dotenv = require("dotenv");
const User = require("../models/User");
const FacebookStrategy = require("passport-facebook-token");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

//JSON WEB TOKEN
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader("authorization"),
      secretOrKey: JWT_SECRET
    },
    async (payload, done) => {
      try {
        const user = await User.findById(payload.sub);

        if (!user) {
          return done(null, false);
        }

        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

//google oauth
passport.use(
  "googleToken",
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        //check whether this current exits in our db

        const existingUser = await User.findOne({ "google.id": profile.id });
        if (existingUser) {
          console.log("user already exits in DB");
          return done(null, existingUser);
        }
        console.log("user does NOT exits, creating a NEW user");

        const newUser = await User({
          method: "google",
          google: {
            id: profile.id,
            name: profile.name.givenName,
            avatar: profile.photos[0].value
          }
        });
        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);

//Facebook Auth

passport.use(
  "facebookToken",
  new FacebookStrategy(
    {
      clientID: process.env.CLIENT_ID_FB,
      clientSecret: process.env.CLIENT_SECRET_FB
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ "facebook.id": profile.id });
        if (existingUser) {
          return done(null, existingUser);
        }
        const newUser = new User({
          method: "facebook",
          facebook: {
            id: profile.id,
            name: profile.name.givenName,
            avatar: profile.photos[0].value
          }
        });

        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, false, error.message);
      }
    }
  )
);
