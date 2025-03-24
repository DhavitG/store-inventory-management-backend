const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({})
    .sort("name") // space and next property
    .select("name price") // space and next property
    .limit(4)
    .skip(15); // will skip the first 15
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
  const queryObject = {};

  if (featured) {
    // queryObject.featured = featured;
    queryObject.featured = featured === "true" ? true : false; // just to get it in boolean
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" }; // regex: substring-search, i: case-insensitive
  }

  let result = Product.find(queryObject);

  console.log("Query Object:", queryObject);

  if (sort) {
    const sortList = sort
      .split(",")
      .map((e) => e.trim())
      .filter((e) => e !== "")
      .join(" ");
    result = result.sort(sortList);

    console.log(sortList);
  } else {
    result = result.sort("createdAt");
  }

  if (fields) {
    const fieldsList = fields
      .split(",")
      .map((e) => e.trim())
      .filter((e) => e !== "")
      .join(" ");
    result = result.select(fieldsList);
  }

  const products = await result;
  res.status(200).json({ products });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
