require("dotenv").config();

const connectDB = require("./db/connect");

const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI);
    if (Product) await Product.deleteMany();

    await Product.create(jsonProducts);
    console.log("hello");

    process.exit(0); // everything went well and we just exit the process
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

start();
