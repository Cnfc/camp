var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creak", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Grantile Hill", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Mountain", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Mountain", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"}
];

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

  res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  //redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.OP, function(){
  console.log("The YalpCamp Has starRt");
});















app.listen(3000);
