const mongoose = require("mongoose");

const { Schema } = mongoose;

const CostumerSchema = Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Costumer", CostumerSchema);
