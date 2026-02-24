const express = require("express");
const {
  createProductController,
  getAllProductController,
  productDetailsController,
} = require("../Controllers/product.controller");
const multer = require("multer");

const authMiddleware = require("../Middleware/auth.middleware");
const uploadImgMiddleware = require("../Middleware/uploadImg.middleware");
const productRoute = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

productRoute.get("/", authMiddleware, getAllProductController);

productRoute.post(
  "/admin/create",
  authMiddleware,
  upload.single("image"),
  uploadImgMiddleware,
  createProductController,
);

productRoute.get(
  "/product-details/:id",
  authMiddleware,
  productDetailsController,
);

module.exports = productRoute;
