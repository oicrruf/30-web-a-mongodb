const express = require("express");
const router = express.Router();
const { Product } = require("../model/product");
// const { date } = require("../middleware/date");
// const { isValid } = require("../middleware/isValid");
const { createProduct } = require("../middleware/product/create");
const { updateProduct } = require("../middleware/product/update");

// Todos los productos
// router.get("/", date, (req, res, next) => {
router.get("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Productos por ID
// router.get("/:id", isValid, date, (req, res, next) => {
router.get("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

// Crear producto
router.post("/", createProduct, (req, res, next) => {
  // console.log(req.body);
  res.send({ product: req.body });
});

// Actualizar producto
router.patch("/:id", updateProduct, (req, res, next) => {
  res.send({ product: { ...req.body, id: req.params.id } });
});

// Eliminar producto
router.delete("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

module.exports = router;
