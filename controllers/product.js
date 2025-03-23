const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  throw new Error("successful in throwing errors");
  res.status(200).json({ msg: "Products testing route" });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "Products testing route" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
