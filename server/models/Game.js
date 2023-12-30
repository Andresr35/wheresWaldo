const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  startTime: { type: Date },
  endTime: { type: Date },
  firstGame: { type: Schema.Types.ObjectId, ref: "Map" },
  secondGame: { type: Schema.Types.ObjectId, ref: "Map" },
  thirdGame: { type: Schema.Types.ObjectId, ref: "Map" },
  finished: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

GameSchema.virtual("finishTime").get(function () {
  return (
    (this.endTime.getTime() - this.startTime.getTime()) /
    (1000 * 60)
  ).toPrecision(3);
});

GameSchema.set("toObject", { virtuals: true });
GameSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Game", GameSchema);
