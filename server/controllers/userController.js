const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Game = require("../models/Game");

exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const allGames = await Game.find(
    { finished: true },
    {},
    { populate: "user" }
  ).exec();
  res.json({
    message: "Here are all the games that have finished",
    allGames,
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  try {
    if (!req.params.userID) {
      res.json({ message: "Missing User ID" });
    } else {
      const result = await User.findById(req.params.userID)
        .populate({
          path: "game",
          populate: [
            {
              path: "firstGame",
              model: "Map",
            },
            {
              path: "secondGame",
              model: "Map",
            },
            {
              path: "thirdGame",
              model: "Map",
            },
          ],
        })
        .exec();
      res.json({
        message: "success",
        ...result,
      });
    }
  } catch (error) {
    res.json({
      error: error.stack,
      message: "There was an error getting the User",
    });
  }
});
