const express = require("express");
const router = express.Router();

router.get("/about", function (req, res) {
  res.send("Second api page");
});

module.exports = router;