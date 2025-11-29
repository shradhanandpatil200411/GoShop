const { v4: uuid4 } = require("uuid");
const uploadToCloud = require("../Service/storage.service");

async function uploadImgMiddleware(req, res, next) {
  try {
    const user = req.user;
    const getFile = req.file;
    const data = {
      file: getFile.buffer,
      name: uuid4(),
    };

    const response = await uploadToCloud(data);
    const imageDetails = {
      imgName: response.name,
      imgUrl: response.url,
      thumbnailUrl: response.thumbnailUrl,
    };
    req.imageDetails = imageDetails;
    next();
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
}

module.exports = uploadImgMiddleware;
