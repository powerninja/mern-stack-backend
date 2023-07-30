const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json("こんにちは");
});

//ITEM functions

// USER functions

app.listen(5050, () => {
  console.log("server is listening on port 5050...");
});
