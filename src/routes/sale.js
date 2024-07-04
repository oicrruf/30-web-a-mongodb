const express = require("express");
const router = express.Router();
const { Sale } = require("../model/sale");

// Todos los ventas
router.get("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Ventas por ID
router.get("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

// Crear venta
router.post("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Actualizar venta
router.patch("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

// Eliminar venta
router.delete("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

module.exports = router;
