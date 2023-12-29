const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  startTime: Date,
  endTime: Date,
  firstGame: { type: Schema.Types.ObjectId, ref: "Map" },
  secondGame: { type: Schema.Types.ObjectId, ref: "Map" },
  thirdGame: { type: Schema.Types.ObjectId, ref: "Map" },
  finished: { type: Boolean, default: false },
});

GameSchema.virtual("finishTime").get(function () {
  return (this.endTime.getTime() - this.startTime.getTime()) / (1000 * 60);
});

GameSchema.set("toObject", { virtuals: true });
GameSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Game", GameSchema);
