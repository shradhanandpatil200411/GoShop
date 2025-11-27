const createProductController = (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ message: "product created", data: user });
  } catch (err) {
    res.send(err);
  }
};

module.exports = { createProductController };
