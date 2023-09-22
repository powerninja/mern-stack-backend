const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.get("/", (req, res) => {
  return res.status(200).json("こんにちは");
});

//ITEM functions
//Create Item

app.post("/item/create", (req, res) => {
  console.log(req.body.title);
  return res.status(200).json("こんばんわ");
});

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
