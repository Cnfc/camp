var express    = require("express"),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require("mongoose")


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Mountain!!", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"
//   }, function(err, campground){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("NEWLy created campground: ");
//       console.log(campground);
//     }
//   });
//

var campgrounds = [
  {name: "Salmon Creak", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Grantile Hill", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Mountain", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Mountain", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Salmon Creak", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Grantile Hill", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Mountain", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
  {name: "Mountain", image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg"},
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
  //  GET ALL CAMPGROUNDS FROM DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds: allCampgrounds});
    }
  });
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  // CREATE NEW CAMPGROUNDS AND SAVE TO DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      //redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});

app.listen(process.env.PORT, process.env.OP, function(){
  console.log("The YalpCamp Has starRt");
});















app.listen(3000);
