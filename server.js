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
  res.render("dashboard/dashboard.ejs")
});

app.listen(port, function () {
  console.log(`app listening on port ${port}!`);
});