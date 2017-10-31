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

// CREAT
router.post("/", function(req, res){
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
// NEW create new camp
router.get("/new", function(req, res){
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
module.exports = router;
