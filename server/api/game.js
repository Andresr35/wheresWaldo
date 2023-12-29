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
router.post("/start", mapController.startGame);
router.post("/tutorial/waldo", mapController.findWaldoTutorial);

router.post("/firstGame/waldo", mapController.findWaldoGameOne);
router.post("/firstGame/wenda", mapController.findWendaGameOne);
router.post("/firstGame/wizard", mapController.findWizardGameOne);
router.post("/firstGame/Odlaw", mapController.findOdlawGameOne);

module.exports = router;
