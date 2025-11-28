const express = require("express");
const {
  createProductController,
} = require("../Controllers/product.controller");
const multer = require("multer");

const authMiddleware = require("../Middleware/auth.middleware");
const productRoute = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

productRoute.post(
  "/create",
  authMiddleware,
  upload.single("image"),
  createProductController
);

module.exports = productRoute;
