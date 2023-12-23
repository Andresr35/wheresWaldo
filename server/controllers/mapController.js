const asyncHandler = require("express-async-handler");

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
