const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String
  },
  googleId: {
    type: String
  },
  avatar: {
    type: String
  },
  facebookId: {
    type: String
  }
});

module.exports = User = mongoose.model("user", UserSchema);
