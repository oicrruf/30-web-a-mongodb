const express = require("express");
const router = express.Router();
const { Sale } = require("../src/model/sale");

// Todos los productos
router.get("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Productos por ID
router.get("/:id", (req, res, next) => {
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
