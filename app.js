var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("home");
});

app.post("/addfriend", function(req, res){
  res.send("You have reached ");
});

app.get("/friends", function(req, res){
  var friends = ["Tony", "LA", "LD", "LD", "F","D"]
  res.render("friends", {friends: friends});
});


app.listen(process.env.PORT, process.env.OP, function(){
  console.log("Server starRt");
});















app.listen(3000);
