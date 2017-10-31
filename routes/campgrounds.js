var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");

// INDEX SHOW ALL CAMPGROUNDS
router.get("/", function(req, res){
  //  GET ALL CAMPGROUNDS FROM DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
    }
  });
});

// CREAT add new campgrounds to DB
router.post("/", isLoggedIn, function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var author = {
    id: req.user._id,
    username: req.user.username
  }
  var newCampground = {name: name, image: image, description: desc, author:author}
  // CREATE NEW CAMPGROUNDS AND SAVE TO DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      //redirect back to campgrounds page
      console.log(newlyCreated);
      res.redirect("/campgrounds");
    }
  });
});
// NEW create new camp
router.get("/new", isLoggedIn, function(req, res){
  res.render("campgrounds/new");
});

// SHOWS MORE INFO ABOUT ONE CAMPGROUND
router.get("/:id", function(req,res){
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
});
// EDIT CAMPGROUND ROUND
router.get("/:id/edit", function(req, res){
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      res.redirect("/campgrounds");
    } else {
      res.render("campgrounds/edit", {campground: foundCampground});
    }
  });
});
// UPDATE CAMPGROUND ROUND

router.put("/:id/", function(req, res){
  //  find and update the correct campground

  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
    if(err){
      res,redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
  //redirect

});

//middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}
module.exports = router;