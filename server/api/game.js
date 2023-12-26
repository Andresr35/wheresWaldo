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

router.post("/gameOne/waldo", mapController.findWaldoGameOne);
router.post("/gameOne/wenda", mapController.findWendaGameOne);
router.post("/gameOne/wizard", mapController.findWizardGameOne);
router.post("/gameOne/Odlaw", mapController.findOdlawGameOne);

module.exports = router;
