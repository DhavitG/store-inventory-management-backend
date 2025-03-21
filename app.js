require("dotenv").config();

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">products route</a>`);
});

// products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5003;

const start = async () => {
  try {
    //connectDB
    app.listen(port, console.log(`Server is listening port ${port}...`));
  } catch (e) {
    console.log(e);
  }
};

start();
