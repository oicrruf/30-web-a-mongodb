const mongoose = require("mongoose");

const { Schema } = mongoose;

const CustomerSchema = Schema(
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

module.exports = mongoose.model("Customer", CustomerSchema);
