const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  startTime: Date,
  endTime: Date,
  firstGame: { type: Schema.Types.ObjectId, ref: "Map" },
  secondGame: { type: Schema.Types.ObjectId, ref: "Map" },
  thirdGame: { type: Schema.Types.ObjectId, ref: "Map" },
});

GameSchema.virtual("finishTime").get(function () {
  return this.endTime - this.startTime;
});

module.exports = mongoose.model("Game", GameSchema);
