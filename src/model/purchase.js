const mongoose = require("mongoose");

const { Schema } = mongoose;

const PurchaseSchema = Schema(
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

module.exports = mongoose.model("Purchase", PurchaseSchema);
