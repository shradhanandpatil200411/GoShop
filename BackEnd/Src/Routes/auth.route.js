const express = require("express");

const {
  registerController,
  loginController,
  currentUserController,
} = require("../Controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/register", registerController);

authRouter.post("/login", loginController);

authRouter.get("/user", currentUserController);

module.exports = authRouter;
