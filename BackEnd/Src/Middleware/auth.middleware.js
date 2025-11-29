const jwt = require("jsonwebtoken");
const userModel = require("../Model/user.model");

const authMiddleware = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(id);
    if (!user.isAdmin) {
      return res.status(401).json({ message: "Access Denied" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

module.exports = authMiddleware;
