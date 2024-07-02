const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

require("dotenv").config();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app = express();

console.log(process.env.STRING_CONNECTION);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
