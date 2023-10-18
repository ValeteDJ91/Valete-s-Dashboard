const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("config/config.ejs")
});

router.get("/categories", function (req, res) {
  res.send("Config the categories");
});

module.exports = router;