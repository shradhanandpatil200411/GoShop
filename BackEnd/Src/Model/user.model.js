const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      require: true,
      maxLength: 20,
      minLength: 2,
    },
    lastName: {
      type: String,
      require: true,
      maxLength: 20,
      minLength: 2,
    },
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    maxLength: 20,
    minLength: 6,
  },
});

module.exports = mongoose.model("user", userSchema);
