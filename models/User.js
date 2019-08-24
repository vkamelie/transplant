const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  method: {
    type: String,
    enum: ["google", "facebook"],
    required: true
  },
  google: {
    name: {
      type: String
    },
    avatar: {
      type: String
    },
    id: {
      type: String
    }
  },
  facebook: {
    name: {
      type: String
    },

    avatar: {
      type: String
    },
    id: {
      type: String
    }
  }
});

module.exports = User = mongoose.model("user", UserSchema);
