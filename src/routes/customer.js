const express = require("express");
const router = express.Router();
// const { Product } = require("../model/product");
// const { date } = require("../middleware/date");
// const { isValid } = require("../middleware/isValid");
const db = require("../../mongo");
const { ObjectId } = require("mongodb");
const { createCustomer } = require("../middleware/customer/create");
// const { updateProduct } = require("../middleware/product/update");

const collection = db.collection("customer");

// create item
router.post("/", createCustomer, async (req, res, next) => {
  await collection
    .insertOne(req.body)
    .then((doc) => res.status(201).send(doc))
    .catch((error) => res.status(500).send({ message: error }));
});

// get items
router.get("/", async (req, res, next) => {
  await collection
    .find()
    .toArray((err, result) => {
      if (err) throw err;
    })
    .then((doc) => res.status(200).send(doc))
    .catch((error) => res.status(500).send({ message: error }));
});

// get item
router.get("/:id", async (req, res, next) => {
  await collection
    .findOne({ _id: new ObjectId(req.params.id) }, (err, result) => {
      if (err) throw err;
    })
    .then((doc) => res.status(200).send(doc))
    .catch((error) => res.status(500).send({ message: error }));
});

// update item
router.patch("/:id", async (req, res, next) => {
  // updateProduct
  await collection
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
    .then((doc) => res.status(200).send(doc))
    .catch((error) => res.status(500).send({ message: error }));
});

// delete item
router.delete("/:id", async (req, res, next) => {
  await collection
    .deleteOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => res.status(200).send(doc))
    .catch((error) => res.status(500).send({ message: error }));
});

module.exports = router;
