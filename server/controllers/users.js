const jwt = require("jsonwebtoken");
// const User = require("../../models/User");
const dotenv = require("dotenv");

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

signToken = user => {
  return jwt.sign(
    {
      iss: "Transplant Support",
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 14)
    },
    JWT_SECRET
  );
};

module.exports = {
  googleAuth: async (req, res, next) => {
    //generate token

    const token = signToken(req.user);
    res.status(200).json({ token });
  },

  facebookAuth: async (req, res, next) => {
    const token = signToken(req.user);
    res.status(200).json({ token });
  },

  secret: async (req, res, next) => {
    console.log("got to the auth end point");
    res.json({ secret: "resources" });
  }
};

//generate the token
//  const token = signToken(newUser)
