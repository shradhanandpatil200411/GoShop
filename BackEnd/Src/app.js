const express = require("express");
const dotEnv = require("dotenv");
dotEnv.config();
const cookie = require("cookie-parser");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

// Preflight responses are handled by the main CORS middleware above.

app.use(cookie());
app.use(express.json());

const productRoute = require("./Routes/product.route");
const authRouter = require("./Routes/auth.route");

app.use("/api/auth", authRouter);
app.use("/api/product", productRoute);
module.exports = app;
