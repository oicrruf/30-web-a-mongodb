const express = require("express");
const router = express.Router();
// const { Product } = require("../model/product");
// const { date } = require("../middleware/date");
// const { isValid } = require("../middleware/isValid");
const db = require("../../mongo");

const { createProduct } = require("../middleware/product/create");
const { updateProduct } = require("../middleware/product/update");

const collection = db.collection("product");

// Crear producto
router.post("/", createProduct, async (req, res, next) => {
  await collection
    .insertOne(req.body)
    .then((doc) => res.status(201).send(doc))
    .catch((error) => res.status(500).send({ message: error }));
});

// router.get("/", date, (req, res, next) => {
router.get("/", async (req, res, next) => {
  let productos = await collection.find({}).toArray((err, result) => {
    if (err) throw err;
    console.log(result);
    db.close();
  });

  res.send(productos);
});

// Productos por ID
// router.get("/:id", isValid, date, (req, res, next) => {
router.get("/:id", async (req, res, next) => {
  let producto = await collection.findOne(
    { name: req.params.id },
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
  res.send(producto);
});

// Actualizar producto
router.patch("/:id", updateProduct, async (req, res, next) => {
  let producto = await collection.updateOne(
    { name: req.params.id },
    { $set: { name: req.body.name } },
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
  res.send(producto);
});

// Eliminar producto
router.delete("/:name", async (req, res, next) => {
  let producto = await collection.deleteOne(
    { name: req.params.name },
    function (err, obj) {
      if (err) throw err;

      db.close();
    }
  );
  res.send(producto);
});

module.exports = router;
