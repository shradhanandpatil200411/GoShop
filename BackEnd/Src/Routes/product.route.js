const express = require("express");
const {
  createProductController,
} = require("../Controllers/product.controller");
const multer = require("multer");

const authMiddleware = require("../Middleware/auth.middleware");
const uploadImgMiddleware = require("../Middleware/uploadImg.middleware");
const productRoute = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

productRoute.post(
  "/admin/create",
  authMiddleware,
  upload.single("image"),
  uploadImgMiddleware,
  createProductController
);

module.exports = productRoute;
