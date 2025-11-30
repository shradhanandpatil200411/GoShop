const express = require("express");
const {
  createProductController,
  getAllProductController,
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

productRoute.get("/", authMiddleware, getAllProductController);

module.exports = productRoute;
