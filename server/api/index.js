var express = require("express");
var router = express.Router();

const gameRouter = require("./game");
const userRouter = require("./user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Welcome to the API!");
});

router.use("/game", gameRouter);
router.use("/user", userRouter);

module.exports = router;
