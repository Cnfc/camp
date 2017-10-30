
var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
  {
    name: "Rest",
    image: "https://thumb1.shutterstock.com/display_pic_with_logo/122782/302961323/stock-photo-pinnacles-national-park-302961323.jpg",
    description: "Stock photo"
  },
  {
    name: "Ruine",
    image: "https://thumb7.shutterstock.com/display_pic_with_logo/122782/122782,1290105116,47/stock-photo-box-canyon-native-american-indian-ruins-65955484.jpg",
    description: "Stock photo"
  },
  {
    name: "Fortres",
    image: "https://thumb9.shutterstock.com/display_pic_with_logo/357622/142342288/stock-photo-redwood-national-park-pathway-through-the-redwoods-giants-142342288.jpg",
    description: "Stock photo"
  }

]

function seedDB(){
  // Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err)
    }
    console.log("removed campgrounds!");
    // add a few campgrounds
    data.forEach(function(seed){
      Campground.create(seed, function(err, campground){
        if(err){
          console.log(err);

        } else {
          console.log("added a campground");
          //add a few comments
          comment.create(
            {
              text: "This palce is great",
              author: "Tess"
            }, function(err, comment){
              if(err){
                consoloe.log(err);

              } else {
                campground.comments.push(comment);
                campground.save();
                consoloe.log("Created new comment");
              }
            });
        }
      });
    });
  });

}
module.exports = seedDB;
