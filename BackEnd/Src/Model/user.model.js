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
    maxLength: 100,
    minLength: 4,
  },
  password: {
    type: String,
    require: true,
    maxLength: 100,
    minLength: 6,
  },
  gender: {
    type: String,
  },
  dataOfBirth: {
    type: Date,
  },
  mobileNumber: {
    type: Number,
    maxLength: 10,
    minLength: 10,
  },
  address: {
    type: String,
    maxLength: 500,
    minLength: 10,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("user", userSchema);
