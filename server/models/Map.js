const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MapSchema = new Schema({
  foundWaldo: Boolean,
  foundWenda: Boolean,
  foundWizard: Boolean,
  foundOdlaw: Boolean,
});

module.exports = mongoose.model("Map", MapSchema);
