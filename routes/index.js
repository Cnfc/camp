var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//=============================================================
// AUTH ROUTES
//=============================================================
// root route
router.get("/", function(req, res){
  res.render("landing");
});

//show register form
router.get("/register", function(req, res){
  res.render("register");
});

// handle sing up logic
router.post("/register", function(req, res){
  var newUser = new User({username: req.body.username});
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      req.flash("error", err.message);
      return res.render("register");
    }
      passport.authenticate("local")(req, res, function(){
        req.flash("success", "Welcome to YelpCamp" + user.name);
        res.redirect("/campgrounds");
      });
  });
});

// show login form
router.get("/login", function(req, res){

  res.render("login");
});

// Handaling login logic
router.post("/login", passport.authenticate("local",
  {
   successRedirect: "/campgrounds",
   failureRedirect: "/login"
 }), function(req, res){
});

// LOGOUT ROUTES
router.get("/logout", function(req, res){
  req.logout();
  req.flash("success", "Logged you out!")
  res.redirect("/campgrounds");
});

// Middleware
// function isLoggedIn(req, res, next){
//   if(req.isAuthenticated()){
//     return next();
//   }
//   res.redirect("/login");
// }

module.exports = router;
