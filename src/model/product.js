const mongoose = require("mongoose");

const { Schema } = mongoose;

const ProductSchema = Schema(
  {
    name: String,
    price: Number,
    barCode: String,
    stock: Number,
    soldOut: Boolean,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Product", ProductSchema);
