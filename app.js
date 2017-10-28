var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// var friends = ["Tony", "LA", "LD", "LD", "F","D"]

app.get("/", function(req, res){
  res.render("landing");
});
//
// app.post("/addfriend", function(req, res){
//   var newFriend = req.body.newfriend;
//   friends.push(newFriend);
//   res.redirect("/friends");
// });
//

app.get("/campgrounds", function(req, res){
  var campgrounds = [
    {name: "Salmon Creak", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
    {name: "Grantile Hill", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
    {name: "Mountain", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
    {name: "Mountain", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"}
  ]
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.OP, function(){
  console.log("The YalpCamp Has starRt");
});















app.listen(3000);
