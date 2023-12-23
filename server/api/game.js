var express = require("express");
var router = express.Router();
const mapController = require("../controllers/mapController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Welcome to the game api!");
});

router.get("/tutorial", (req, res, next) => {
  res.send("Welcome to the tutorial!");
});

router.post("/tutorial/waldo", mapController.findWaldoTutorial);

module.exports = router;
