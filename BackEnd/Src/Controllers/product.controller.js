const { v4: uuid4 } = require("uuid");
const uploadToCloud = require("../Service/storage.service");
const createProductController = async (req, res) => {
  const user = req.user;
  const getImg = req.file;
  const data = {
    file: getImg.buffer,
    name: uuid4(),
  };

  const response = await uploadToCloud(data);
  console.log(response);

  res.status(200).json({ message: "product created", data: user });
};

module.exports = { createProductController };
