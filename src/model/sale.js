const mongoose = require("mongoose");

const { Schema } = mongoose;

const SaleSchema = Schema(
  {
    productId: String,
    quantity: Number,
    price: Number,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Sale", SaleSchema);
