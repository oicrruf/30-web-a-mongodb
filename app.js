const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();

const indexRouter = require("./src/routes/index");
const usersRouter = require("./src/routes/users");
const productRouter = require("./src/routes/product");
const saleRouter = require("./src/routes/sale");
const purchaseRouter = require("./src/routes/purchase");
const customerRouter = require("./src/routes/customer");

app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// mongoose
//   .connect(process.env.DATABASE_URI)
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.log(err));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/sale", saleRouter);
app.use("/purchase", purchaseRouter);
app.use("/customer", customerRouter);

module.exports = app;
