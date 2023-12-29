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
    user: { ...user, game: { ...game, firstGame } },
    game,
  });
});

//-------Game One------------
exports.findWaldoGameOne = asyncHandler(async (req, res, next) => {
  try {
    const coord = req.body.coord;
    if (!coord) {
      res.json({ message: "No coords were received", found: false });
    } else if (
      coord[0] >= 0.69 &&
      coord[0] <= 0.71 &&
      coord[1] >= 0.4 &&
      coord[1] <= 0.46
    ) {
      const user = await User.findById(req.body.userID)
        .populate({
          path: "game",
          populate: {
            path: "firstGame",
            model: "Map",
          },
        })
        .exec();

      const foundCharacters = await Map.findByIdAndUpdate(
        user.game.firstGame._id,
        { ...user.game.firstGame._doc, foundWaldo: true },
        { new: true }
      );

      res.json({
        message: "Waldo was found!",
        found: true,
        foundCharacters,
      });
    } else {
      res.json({ message: "Waldo was not found", found: false });
    }
  } catch (error) {
    res.json({ ...error, found: false });
  }
});

exports.findWendaGameOne = asyncHandler(async (req, res, next) => {
  try {
    const coord = req.body.coord;
    if (!coord) {
      res.json({ message: "No coords were received", found: false });
    } else if (
      coord[0] >= 0.57 &&
      coord[0] <= 0.6 &&
      coord[1] >= 0.66 &&
      coord[1] <= 0.7
    ) {
      const user = await User.findById(req.body.userID)
        .populate({
          path: "game",
          populate: {
            path: "firstGame",
            model: "Map",
          },
        })
        .exec();

      const foundCharacters = await Map.findByIdAndUpdate(
        user.game.firstGame._id,
        { ...user.game.firstGame._doc, foundWenda: true },
        { new: true }
      );
      res.json({ message: "Wenda was found!", found: true, foundCharacters });
    } else {
      res.json({ message: "Wenda was not found", found: false });
    }
  } catch (error) {
    res.json({ ...error, found: false });
  }
});

exports.findWizardGameOne = asyncHandler(async (req, res, next) => {
  try {
    const coord = req.body.coord;
    if (!coord) {
      res.json({ message: "No coords were received", found: false });
    } else if (
      coord[0] >= 0.68 &&
      coord[0] <= 0.7 &&
      coord[1] >= 0.65 &&
      coord[1] <= 0.71
    ) {
      const user = await User.findById(req.body.userID)
        .populate({
          path: "game",
          populate: {
            path: "firstGame",
            model: "Map",
          },
        })
        .exec();

      const foundCharacters = await Map.findByIdAndUpdate(
        user.game.firstGame._id,
        { ...user.game.firstGame._doc, foundWizard: true },
        { new: true }
      );
      res.json({ message: "Wizard was found!", found: true, foundCharacters });
    } else {
      res.json({ message: "Wizard was not found", found: false });
    }
  } catch (error) {
    res.json({ ...error, found: false });
  }
});

exports.findOdlawGameOne = asyncHandler(async (req, res, next) => {
  try {
    const coord = req.body.coord;
    if (!coord) {
      res.json({ message: "No coords were received", found: false });
    } else if (
      coord[0] >= 0.54 &&
      coord[0] <= 0.56 &&
      coord[1] >= 0.77 &&
      coord[1] <= 0.83
    ) {
      const user = await User.findById(req.body.userID)
        .populate({
          path: "game",
          populate: {
            path: "firstGame",
            model: "Map",
          },
        })
        .exec();

      const foundCharacters = await Map.findByIdAndUpdate(
        user.game.firstGame._id,
        { ...user.game.firstGame._doc, foundOdlaw: true },
        { new: true }
      );
      res.json({ message: "Odlaw was found!", found: true, foundCharacters });
    } else {
      res.json({ message: "Oldaw was not found", found: false });
    }
  } catch (error) {
    res.json({ ...error, found: false });
  }
});

const findUser = async (userID) => {
  return await User.findById(userID)
    .populate({
      path: "game",
      populate: [
        {
          path: "secondGame",
          model: "Map",
        },
        {
          path: "firstGame",
          model: "Map",
        },
        { path: "thirdGame", model: "Map" },
      ],
    })
    .exec();
};

//-------Game Two------------
exports.findCharacterGameTwo = asyncHandler(async (req, res, next) => {
  try {
    const { character } = req.params;
    const { coord } = req.body;
    let found = false;
    let foundCharacters = {};
    if (!coord) {
      res.json({ message: "No coords were received", found });
    } else {
      const user = await findUser(req.body.userID);
      switch (character) {
        case "waldo":
          if (
            coord[0] >= 0.6 &&
            coord[0] <= 0.63 &&
            coord[1] >= 0.36 &&
            coord[1] <= 0.42
          ) {
            found = true;
            foundCharacters = await Map.findByIdAndUpdate(
              user.game.secondGame._id,
              { ...user.game.secondGame._doc, foundWaldo: true },
              { new: true }
            );
          } else {
            return res.json({ message: "Waldo was not found", found });
          }
          break;
        case "wenda":
          if (
            coord[0] >= 0.76 &&
            coord[0] <= 0.78 &&
            coord[1] >= 0.39 &&
            coord[1] <= 0.44
          ) {
            found = true;
            foundCharacters = await Map.findByIdAndUpdate(
              user.game.secondGame._id,
              { ...user.game.secondGame._doc, foundWenda: true },
              { new: true }
            );
          } else {
            return res.json({ message: "Wenda was not found", found });
          }
          break;
        case "wizard":
          if (
            coord[0] >= 0.26 &&
            coord[0] <= 0.28 &&
            coord[1] >= 0.34 &&
            coord[1] <= 0.38
          ) {
            found = true;
            foundCharacters = await Map.findByIdAndUpdate(
              user.game.secondGame._id,
              { ...user.game.secondGame._doc, foundWizard: true },
              { new: true }
            );
          } else {
            return res.json({ message: "Wizard was not found", found });
          }
          break;
        case "odlaw":
          if (
            coord[0] >= 0.09 &&
            coord[0] <= 0.12 &&
            coord[1] >= 0.34 &&
            coord[1] <= 0.4
          ) {
            found = true;
            foundCharacters = await Map.findByIdAndUpdate(
              user.game.secondGame._id,
              { ...user.game.secondGame._doc, foundOdlaw: true },
              { new: true }
            );
          } else {
            return res.json({ message: "Odlaw was not found", found });
          }
          break;
        default:
          res.json({ message: "Character is not in this map", found });
          break;
      }
    }
    res.json({
      message: `${character} was found!`,
      found,
      foundCharacters,
    });
  } catch (error) {
    console.log(error);
    res.json({ ...error, found });
  }
});

//-------Game Three------------
exports.findCharacterGameThree = asyncHandler(async (req, res, next) => {
  try {
    const { character } = req.params;
    const { coord } = req.body;
    let found = false;
    let foundCharacters = {};
    if (!coord) {
      res.json({ message: "No coords were received", found });
    } else {
      const user = await findUser(req.body.userID);
      switch (character) {
        case "waldo":
          if (
            coord[0] >= 0.26 &&
            coord[0] <= 0.3 &&
            coord[1] >= 0.31 &&
            coord[1] <= 0.39
          ) {
            found = true;
            foundCharacters = await Map.findByIdAndUpdate(
              user.game.thirdGame._id,
              { ...user.game.thirdGame._doc, foundWaldo: true },
              { new: true }
            );
          } else {
            return res.json({ message: "Waldo was not found", found });
          }
          break;
        case "wenda":
          if (
            coord[0] >= 0.24 &&
            coord[0] <= 0.26 &&
            coord[1] >= 0.7 &&
            coord[1] <= 0.77
          ) {
            found = true;
            foundCharacters = await Map.findByIdAndUpdate(
              user.game.thirdGame._id,
              { ...user.game.thirdGame._doc, foundWenda: true },
              { new: true }
            );
          } else {
            return res.json({ message: "Wenda was not found", found });
          }
          break;
        case "wizard":
          if (
            coord[0] >= 0.6 &&
            coord[0] <= 0.63 &&
            coord[1] >= 0.84 &&
            coord[1] <= 0.93
          ) {
            found = true;
            foundCharacters = await Map.findByIdAndUpdate(
              user.game.thirdGame._id,
              { ...user.game.thirdGame._doc, foundWizard: true },
              { new: true }
            );
          } else {
            return res.json({ message: "Wizard was not found", found });
          }
          break;
        case "odlaw":
          if (
            coord[0] >= 0.58 &&
            coord[0] <= 0.62 &&
            coord[1] >= 0.63 &&
            coord[1] <= 0.7
          ) {
            found = true;
            foundCharacters = await Map.findByIdAndUpdate(
              user.game.thirdGame._id,
              { ...user.game.thirdGame._doc, foundOdlaw: true },
              { new: true }
            );
          } else {
            return res.json({ message: "Odlaw was not found", found });
          }
          break;
        default:
          res.json({ message: "Character is not in this map", found });
          break;
      }
    }
    res.json({
      message: `${character} was found!`,
      found,
      foundCharacters,
    });
  } catch (error) {
    console.log(error);
    res.json({ ...error, found });
  }
});
