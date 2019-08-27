const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  method: {
    type: String,
    enum: ["google", "facebook"],
    required: true
  },
  google: {
    id: {
      type: String
    }
  },
  facebook: {
    id: {
      type: String
    }
  },
  avatar: {
    type: String
  },
  name: {
    type: String
  }
});

module.exports = User = mongoose.model("user", UserSchema);
