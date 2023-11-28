const express = require("express");
const axios = require('axios');
const fs = require('fs');
const app = express();
const port = 3333;
const config = require("./routes/config.js");
const api = require("./routes/api.js");
const logger = require("./middlewares/logger.js");
require('dotenv').config()

app.set("view engine", "ejs");

app.use(logger);

app.use("/", express.static("public"));

app.use("/config", config);
app.use("/api", api);

app.get("/", async function (req, res) {
  let jsonshortcut = require('./data/shortcut.json')
  let jsonconfig = require('./data/config.json')
  if (jsonconfig.random_background_image_unsplash) {
    let bg_image_tmp = await axios.get('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      params: {
        query: config.search_background_image_unsplash
      }
    });
    var bg_image = bg_image_tmp?.data?.urls?.raw;
  } else if (jsonconfig.random_background_image_file) {    
    let files = fs.readdirSync("./public/image/background")
    var bg_image = "/image/background/"+files[Math.round(Math.random()*(files.length-1))]
  }
  res.render("dashboard/dashboard.ejs", {shortcuts: jsonshortcut,config: jsonconfig,background: typeof bg_image === 'undefined' ? "" : bg_image})
});

app.listen(port, function () {
  console.log(`Dashboard listening on port ${port}!`);
});