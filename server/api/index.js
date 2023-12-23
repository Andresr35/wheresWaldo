var express = require("express");
var router = express.Router();
const gameRouter = require("./game");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Welcome to the API!");
});

router.use("/game", gameRouter);

module.exports = router;
