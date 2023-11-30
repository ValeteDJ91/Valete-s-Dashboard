const express = require("express");
const router = express.Router();
const middleware = require("../middlewares/config.js");

router.get("/login", function (req, res) {
  let jsonconfig = require('../data/config.json')
  res.render("config/login.ejs", { config: jsonconfig })
});

router.use(middleware);

router.get("/", function (req, res) {
  let jsonconfig = require('../data/config.json')
  res.render("config/config.ejs", { config: jsonconfig })
});

module.exports = router;