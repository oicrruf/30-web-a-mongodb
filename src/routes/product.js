const express = require("express");
const router = express.Router();
const { Product } = require("../model/product");
const { date } = require("../middleware/date");
const { isValid } = require("../middleware/isValid");

// Todos los productos
router.get("/", date, (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Productos por ID
router.get("/:id", isValid, date, (req, res, next) => {
  res.send({ message: req.params.id });
});

// Crear producto
router.post("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Actualizar producto
router.patch("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

// Eliminar producto
router.delete("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

module.exports = router;
