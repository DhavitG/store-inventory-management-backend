const { Router } = require("express");
const router = Router();

const {
  getAllProducts,
  getAllProductsStatic,
} = require("../controllers/product");

router.route("/").get(getAllProducts);

router.route("/static").get(getAllProductsStatic);

module.exports = router;
