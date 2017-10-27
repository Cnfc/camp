var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "LA", "LD", "LD", "F","D"]

app.get("/", function(req, res){
  res.render("home");
});

app.post("/addfriend", function(req, res){
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function(req, res){
  res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.OP, function(){
  console.log("Server starRt");
});















app.listen(3000);
