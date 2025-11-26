const express = require("express");

const {
  registerController,
  loginController,
  currentUserController,
  logOutController,
} = require("../Controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/register", registerController);

authRouter.post("/login", loginController);

authRouter.get("/user", currentUserController);

authRouter.post("/logout", logOutController);

module.exports = authRouter;
