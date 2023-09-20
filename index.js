const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.status(200).json("こんにちは");
});

//ITEM functions
//Create Item
//Read All Items
//Read Single Item
//Update Item
//Delete Item

// USER functions
//Register User
//Login User

app.listen(5050, () => {
  console.log("server is listening on port 5050...");
});
