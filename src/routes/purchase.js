const express = require("express");
const router = express.Router();
const { Purchase } = require("../model/purchase");

// Todos los compras
router.get("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Compras por ID
router.get("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

// Crear compra
router.post("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Actualizar compra
router.patch("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

// Eliminar compra
router.delete("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

module.exports = router;
