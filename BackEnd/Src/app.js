const express = require("express");
const dotEnv = require("dotenv");
const authRouter = require("./Routes/auth.route");
const cookie = require("cookie-parser");
const app = express();
dotEnv.config();
app.use(cookie());

app.use(express.json());

app.use("/auth", authRouter);
module.exports = app;
