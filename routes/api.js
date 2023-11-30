const express = require("express");
const router = express.Router();

router.post("/login", express.urlencoded({ extended: false }), (req, res) => {
  console.log(req.body)
  if (req.body?.username == process.env.connection_username && req.body?.password == process.env.connection_password) {
    req.session.regenerate((err) => {
      if (err) res.redirect('/config/login?f=fail')
      req.session.user = req.body?.username

      req.session.save((err) => {
        if (err) return res.redirect('/config/login?f=fail')
        res.redirect('/config')
      })
    })
  } else {
    res.redirect('/config/login?f=pass')
  }
});

module.exports = router;