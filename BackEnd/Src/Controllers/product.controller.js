const productModel = require("../Model/product.model");

const createProductController = async (req, res) => {
  try {
    const imageInfo = req.imageDetails;
    const {
      title,
      description,
      category,
      subCategory,
      price,
      salePrice,
      totalStock,
      brand,
      colors,
      sizes,
      tags,
    } = req.body;

    if (!imageInfo && !productDetails) {
      return res.status(422).json({ message: "Unprocessable Content error" });
    }

    const product = await productModel.create({
      imageInfo,
      productDetails: {
        title,
        description,
        category,
        subCategory,
        price,
        salePrice,
        totalStock,
        brand,
        colors,
        sizes,
        tags,
      },
    });

    res.status(201).json({ message: "Product created Successfully", product });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e.message,
    });
  }
};

const getAllProductController = async (req, res) => {
  try {
    const getAllProducts = await productModel.find();
    res.json({ data: { getAllProducts } });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = { createProductController, getAllProductController };
