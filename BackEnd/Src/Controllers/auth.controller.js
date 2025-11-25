const userModel = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerController(req, res) {
  try {
    const {
      fullName: { firstName, lastName },
      email,
      password,
    } = req.body;
    const isUserExists = await userModel.findOne({ email });
    if (isUserExists) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      fullName: { firstName, lastName },
      email,
      password: hashPassword,
    });
    res.status(201).json({ message: "User Register Successfully", user });
  } catch (err) {
    res.status(500).json({ message: "Something wrong", error: err });
  }
}

async function loginController(req, res) {
  try {
    const { email: inputEmail, password: inputPassword } = req.body;

    const { email, password, _id } = await userModel.findOne({
      email: inputEmail,
    });

    if (email != inputEmail) {
      return res.status(404).json({ message: "email is wrong" });
    }

    if (password != inputPassword) {
      return res.status(401).json({ message: "password wrong" });
    }

    const token = jwt.sign({ id: _id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    res.status(200).json({ message: "user login" });
  } catch (err) {
    res.status(401).json({ message: "unauthorized user" });
  }
}

async function currentUserController(req, res) {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "please login again" });
    }
    const isValidToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!isValidToken) {
      return res.status(401).json({ message: "invalid user" });
    }

    const getUserData = await userModel
      .findById(isValidToken.id)
      .select("-password");

    res.status(200).json({ message: "Get user Data", data: { getUserData } });
  } catch (err) {
    res.status(401).json({ message: "please login", error: err });
  }
}

module.exports = { registerController, loginController, currentUserController };
