const express = require("express");
const axios = require('axios');
const app = express();
const port = 3333;
const config = require("./routes/config.js");
const api = require("./routes/api.js");
const { middleware } = require("./middlewares/config.js");
require('dotenv').config()

app.set("view engine", "ejs");

app.use("/", express.static("public"));

app.use("/config", config);
app.use("/api", api);

app.get("/", async function (req, res) {
  let jsonshortcut = require('./data/shortcut.json')
  let jsonconfig = require('./data/config.json')
  /*let test = await axios.get('https://api.unsplash.com/photos/random', {
    headers: {
      Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
    },
    params: {
      query: 'desktop wallpaper'
    }
  });*/
  res.render("dashboard/dashboard.ejs", {shortcuts: jsonshortcut,config: jsonconfig,background: typeof variable === 'undefined' ? "" : test?.data?.urls?.raw})
});

app.listen(port, function () {
  console.log(`Dashboard listening on port ${port}!`);
});