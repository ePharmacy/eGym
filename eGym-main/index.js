const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello world. In progress, Welcome");
});

app.listen(process.env.PORT || 5000);
