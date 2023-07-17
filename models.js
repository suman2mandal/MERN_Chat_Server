const mongoose = require("mongoose");

const UserData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
    password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("User", UserData);

module.exports = { User }