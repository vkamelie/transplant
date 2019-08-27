const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  posts: {
    type: Array,
    ref: "posts"
  }
});
module.exports = Profile = mongoose.model("profile", ProfileSchema);
