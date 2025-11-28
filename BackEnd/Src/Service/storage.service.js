const { ImageKit, toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

const uploadToCloud = async (data) => {
  const response = await client.files.upload({
    file: await toFile(Buffer.from(data.file), "file"),
    folder: "GoShop",
    fileName: data.name,
  });
  return response;
};

module.exports = uploadToCloud;
