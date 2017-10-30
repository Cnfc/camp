var express    = require("express"),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground")


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//
// Campground.create(
//   {
//     name: "Mountain!!",
//     image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg",
//     description: "This is a huge granilte hill"
//
//   }, function(err, campground){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("NEWLy created campground: ");
//       console.log(campground);
//     }
//   });


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
      res.render("index", {campgrounds: allCampgrounds});
    }
  });
});


app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};
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

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

// SHOWS MORE INFO ABOUT ONE CAMPGROUND
app.get("/campgrounds/:id", function(req,res){
  //find the campground with providede id
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      //render show template with that campground
      res.render("show", {campground: foundCampground});
    }
  });
  req.params.id
;
});

app.listen(process.env.PORT, process.env.OP, function(){
  console.log("The YalpCamp Has starRt");
});















app.listen(3000);
