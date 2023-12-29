const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MapSchema = new Schema({
  foundWaldo: { type: Boolean, default: false },
  foundWenda: { type: Boolean, default: false },
  foundWizard: { type: Boolean, default: false },
  foundOdlaw: { type: Boolean, default: false },
});

MapSchema.virtual("foundEveryone").get(function () {
  return (
    this.foundWaldo && this.foundWenda && this.foundWizard && this.foundOdlaw
  );
});

MapSchema.set("toObject", { virtuals: true });
MapSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Map", MapSchema);
