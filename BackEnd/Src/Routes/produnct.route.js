const express = require("express");
const {
  createProductController,
} = require("../Controllers/product.controller");

const authMiddleware = require("../Middleware/auth.middleware");

const productRoute = express.Router();

productRoute.post("/create", authMiddleware, createProductController);

module.exports = productRoute;
