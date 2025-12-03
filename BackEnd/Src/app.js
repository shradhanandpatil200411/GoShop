const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const cookie = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));

app.use(cookie());
app.use(express.json());

const productRoute = require("./Routes/product.route");
const authRouter = require("./Routes/auth.route");

app.use("/api/auth", authRouter);
app.use("/api/product", productRoute);
module.exports = app;
