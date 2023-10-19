const express = require("express");
const app = express();
const port = 3333;
const config = require("./routes/config.js");
const api = require("./routes/api.js");

app.set("view engine", "ejs");

app.use("/", express.static("public"));

app.use("/config", config);
app.use("/api", api);

app.get("/", function (req, res) {
  let jsonshortcut = require('./data/shortcut.json')
  let jsonconfig = require('./data/config.json')
  res.render("dashboard/dashboard.ejs", {shortcuts: jsonshortcut,config: jsonconfig})
});

app.listen(port, function () {
  console.log(`Dashboard listening on port ${port}!`);
});