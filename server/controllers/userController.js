const asyncHandler = require("express-async-handler");
const User = require("../models/User");

exports.getUser = asyncHandler(async (req, res, next) => {
  try {
    if (!req.params.userID) {
      res.json({ message: "Missing User ID" });
    } else {
      const result = await User.findById(req.params.userID).exec();
      res.json({
        message: "success",
        result,
      });
    }
  } catch (error) {
    res.json(error);
  }
});
