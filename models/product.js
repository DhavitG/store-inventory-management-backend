const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: [true, "product must have a name"] },
  price: { type: Number, required: [true, "product must have a price"] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  createdAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: `{VALUE} is not supported`,
    },
  },
  //enum: ["ikea", "liddy", "caressa", "marcos"] }, // enum: only particular values allowed
});

const productModel = mongoose.model("Product", ProductSchema);

module.exports = productModel;
