const mongoose = require("mongoose");
const bankSchema = mongoose.Schema({
  nameBank: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: String,
    required: String,
  },
  name: { type: String, required: true },
});

module.exports = mongoose.model("Bank", bankSchemas);
