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

    let colorsArray = JSON.parse(colors);
    let sizesArray = JSON.parse(sizes);
    let tagsArray = JSON.parse(tags);

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
        colors: colorsArray,
        sizes: sizesArray,
        tags: tagsArray,
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

const productDetailsController = async (req, res) => {
  try {
    const { id } = req.params;
    const getProduct = await productModel.findById(id);
    if (!getProduct) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ data: getProduct });
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  createProductController,
  getAllProductController,
  productDetailsController,
};
