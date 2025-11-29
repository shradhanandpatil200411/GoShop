const productModel = require("../Model/product.model");

const createProductController = async (req, res) => {
  try {
    const imageInfo = req.imageDetails;
    const productDetails = req.body;

    if (!imageInfo && !productDetails) {
      return res.status(422).json({ message: "Unprocessable Content error" });
    }

    const product = await productModel.create({
      imageInfo,
      productDetails,
    });

    res.status(201).json({ message: "Product created Successfully", product });
  } catch (err) {
    res.send(err);
  }
};

module.exports = { createProductController };
