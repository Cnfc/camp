var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    // comment    = require("./models/"),
    seedDB     = require("./seeds")



seedDB();
mongoose.connect("mongodb://localhost/yelp_camp_v4");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


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
// INDEX SHOW ALL CAMPGROUNDS
app.get("/campgrounds", function(req, res){
  //  GET ALL CAMPGROUNDS FROM DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: allCampgrounds});
    }
  });
});

// CREAT
app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc}
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
  res.render("campgrounds/new");
});

// SHOWS MORE INFO ABOUT ONE CAMPGROUND
app.get("/campgrounds/:id", function(req,res){
  //find the campground with providede id
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      console.log(foundCampground)
      //render show template with that campground
      res.render("campgrounds/show", {campground: foundCampground});
    }
  });
  req.params.id
;
});

// ====================================================
//COMMENTS ROUTES
app.get("/campgrounds/:id/comments/new", function(req, res){
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err)
    } else {
      res.render("comments/new", {campground: campground});
    }
  });

});

app.listen(process.env.PORT, process.env.OP, function(){
  console.log("The YalpCamp Has starRt");
});















app.listen(3000);
