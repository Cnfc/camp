var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground")
var Comment = require("../models/comment")

// ====================================================
//COMMENTS ROUTES
// ====================================================
router.get("/new", isLoggedIn, function(req, res){
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
    } else {
      res.render("comments/new", {campground: campground});
    }
  });

});

// Comments CREATE
router.post("/", isLoggedIn, function(req, res){
  // looking campground using ID
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      // Comment.create
        Comment.create(req.body.comment, function(err, comment){
          if(err){
            console.log(err);
          } else {
            // add username and id to comment
            comment.author.id = req.user._id;
            comment.author.username = req.user.username;
            // save comment
            comment.save();
            campground.comments.push(comment);
            campground.save();
            res.redirect("/campgrounds/" + campground._id);
          }
        });
      }
  });
  // Create new comment
  // COnnect new comments ro campground
  // redirect campground
});
// COMMENT ROUTE
router.get("/:comment_id/edit", function(req, res){
  Comment.findById(req.params.comment_id, function(err, foundComment){
    if(err){
      res.redirect("back");
    } else {
      res.render("comments/edit", {campground_id: req.params.id, comment: foundComment});
    }
  });
});

// COMMENT UPDATE
router.put("/:comment_id", function(req, res){
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
    if(err){
      res,redirect("back");
    } else {
      res.redirect("/campgrounds/" + req.params.id);
    }
  });
});

// COmment destroy route
router.delete("/:comment_id", function(req, res){
  res.send("alalla");
});

//middleware
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}
module.exports = router;
