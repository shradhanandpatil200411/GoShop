const express = require("express");

const {
  registerController,
  loginController,
  currentUserController,
  logOutController,
  updateUserController,
} = require("../Controllers/auth.controller");
const authMiddleware = require("../Middleware/auth.middleware");

const authRouter = express.Router();

authRouter.post("/register", registerController);

authRouter.patch("/update", authMiddleware, updateUserController);

authRouter.post("/login", loginController);

authRouter.get("/user", currentUserController);

authRouter.post("/logout", logOutController);

module.exports = authRouter;
