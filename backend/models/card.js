const mongoose = require("mongoose");
const crypto = require("crypto");

const cardSchema = new mongoose.Schema(
  {
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    receiver_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    number: {
      type: String,
      required: true
    },
    pin: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
