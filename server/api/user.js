var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

router.get("/:userID", userController.getUser);
module.exports = router;
