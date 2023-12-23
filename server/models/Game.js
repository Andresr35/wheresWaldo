const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  startTime: Date,
  endTime: Date,
  firstGame: mongoose.Types.ObjectId,
  secondGame: mongoose.Types.ObjectId,
  thirdGame: mongoose.Types.ObjectId,
});

GameSchema.virtual("finishTime").get(function () {
  return this.endTime - this.startTime;
});

module.exports = mongoose.model("Game", GameSchema);
