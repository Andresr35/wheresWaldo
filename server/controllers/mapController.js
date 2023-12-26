const asyncHandler = require("express-async-handler");
const Map = require("../models/Map");
const Game = require("../models/Game");
const User = require("../models/User");

exports.findWaldoTutorial = asyncHandler(async (req, res, next) => {
  const coord = req.body.coord;
  if (!coord) {
    res.send("No coords were received");
  } else if (
    coord[0] >= 0.42 &&
    coord[0] <= 0.45 &&
    coord[1] >= 0.73 &&
    coord[1] <= 0.8
  ) {
    res.send("Waldo was found!");
  } else {
    res.send("Waldo was not found");
  }
});

exports.startGame = asyncHandler(async (req, res, next) => {
  // save date to Game Controller
  const gameOne = new Map();
  await gameOne.save();
  const gameTwo = new Map();
  await gameTwo.save();
  const gameThree = new Map();
  await gameThree.save();

  const game = new Game({
    startTime: req.body.date,
    firstGame: gameOne._id,
    secondGame: gameTwo._id,
    thirdGame: gameThree._id,
  });
  await game.save();

  const user = new User({
    game: game._id,
  });
  await user.save();
  res.json({
    user: user,
    game,
  });
});

//-------Game One------------
exports.findWaldoGameOne = asyncHandler(async (req, res, next) => {
  try {
    const coord = req.body.coord;
    if (!coord) {
      res.json({ message: "No coords were received" });
    } else if (
      coord[0] >= 0.69 &&
      coord[0] <= 0.71 &&
      coord[1] >= 0.4 &&
      coord[1] <= 0.46
    ) {
      res.json({ message: "Waldo was found!" });
    } else {
      res.json({ message: "Waldo was not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

exports.findWendaGameOne = asyncHandler(async (req, res, next) => {
  try {
    const coord = req.body.coord;
    if (!coord) {
      res.json({ message: "No coords were received" });
    } else if (
      coord[0] >= 0.57 &&
      coord[0] <= 0.6 &&
      coord[1] >= 0.66 &&
      coord[1] <= 0.7
    ) {
      res.json({ message: "Wenda was found!" });
    } else {
      res.json({ message: "Wenda was not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

exports.findWizardGameOne = asyncHandler(async (req, res, next) => {
  try {
    const coord = req.body.coord;
    if (!coord) {
      res.json({ message: "No coords were received" });
    } else if (
      coord[0] >= 0.68 &&
      coord[0] <= 0.7 &&
      coord[1] >= 0.65 &&
      coord[1] <= 0.71
    ) {
      res.json({ message: "Wizard was found!" });
    } else {
      res.json({ message: "Wizard was not found" });
    }
  } catch (error) {
    console.log(error);
  }
});

exports.findOdlawGameOne = asyncHandler(async (req, res, next) => {
  try {
    const coord = req.body.coord;
    if (!coord) {
      res.json({ message: "No coords were received" });
    } else if (
      coord[0] >= 0.54 &&
      coord[0] <= 0.56 &&
      coord[1] >= 0.77 &&
      coord[1] <= 0.83
    ) {
      res.json({ message: "Odlaw was found!" });
    } else {
      res.json({ message: "Oldaw was not found" });
    }
  } catch (error) {
    console.log(error);
  }
});
