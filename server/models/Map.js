const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MapSchema = new Schema({
  foundWaldo: { type: Boolean, default: false },
  foundWenda: { type: Boolean, default: false },
  foundWizard: { type: Boolean, default: false },
  foundOdlaw: { type: Boolean, default: false },
});

module.exports = mongoose.model("Map", MapSchema);
