const express = require("express");
const router = express.Router();
const { Customer } = require("../model/customer");

// Todos los clientes
router.get("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Cliente por ID
router.get("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

// Crear cliente
router.post("/", (req, res, next) => {
  res.send({ message: "Soy product GET" });
});

// Actualizar cliente
router.patch("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

// Eliminar cliente
router.delete("/:id", (req, res, next) => {
  res.send({ message: req.params.id });
});

module.exports = router;
