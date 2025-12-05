const mongoose = require("mongoose");
function connectDB() {
  mongoose
    .connect(process.env.MONGO_DB_CONATION_STRING + "goSHop")
    .then(() => {
      console.log("DB connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = connectDB;
