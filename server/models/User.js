const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, default: "user" },
  game: { type: Schema.Types.ObjectId, ref: "Game" },
});

module.exports = mongoose.model("User", UserSchema);
