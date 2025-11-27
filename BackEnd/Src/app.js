const express = require("express");
const dotEnv = require("dotenv");
const authRouter = require("./Routes/auth.route");
const cookie = require("cookie-parser");
const cors = require("cors");
const productRoute = require("./Routes/produnct.route");
const app = express();
dotEnv.config();
app.use(cookie());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
// Preflight responses are handled by the main CORS middleware above.

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/product", productRoute);
module.exports = app;
