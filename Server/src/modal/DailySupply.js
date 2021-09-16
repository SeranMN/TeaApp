const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const dailySupplySchema = new Schema({
  supID: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  vehicle: {
    type: String,
    required: true,
  },
  deo: {
    type: String,
    required: true,
  },
});

const dailySupply = mongoose.model("dailysupply", dailySupplySchema);

module.exports = dailySupply;
