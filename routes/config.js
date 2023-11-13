const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/config.js");

router.get("/login", function (req, res) {
  res.render("config/login.ejs")
});

router.use(middleware);

router.get("/", function (req, res) {
  res.render("config/config.ejs")
});

module.exports = router;