const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  time: Number,
  game: mongoose.Types.ObjectId,
});
