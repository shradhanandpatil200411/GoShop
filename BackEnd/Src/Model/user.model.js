const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: String,
    lastName: String,
  },
  email: String,
  password: String,
});

module.exports = mongoose.model("user", userSchema);
