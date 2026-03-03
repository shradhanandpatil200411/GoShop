const mongoose = require("mongoose");
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

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
