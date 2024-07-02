const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/product");

app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);

module.exports = app;
