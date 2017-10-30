
var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
  {
    name: "Rest",
    image: "https://thumb1.shutterstock.com/display_pic_with_logo/122782/302961323/stock-photo-pinnacles-national-park-302961323.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam cumque numquam quos ipsam laudantium a saepe, architecto aliquam nostrum consequatur fuga quo animi error sint culpa voluptatum dolorem, officiis quibusdam ducimus impedit. Veritatis distinctio sed nisi suscipit rem qui doloremque iste quisquam alias iure quaerat eaque ipsum repellendus, blanditiis, praesentium laborum fugiat ipsa voluptas, aliquid ex totam. Ea blanditiis nostrum, neque illo a, minima molestias iusto qui atque nulla doloremque ducimus quasi natus tenetur ex harum sit. Quasi quo quidem facere et unde quae corporis possimus repellendus amet ullam nihil aperiam doloribus, eaque culpa modi ratione quis, nostrum debitis porro."
  },
  {
    name: "Ruine",
    image: "https://thumb7.shutterstock.com/display_pic_with_logo/122782/122782,1290105116,47/stock-photo-box-canyon-native-american-indian-ruins-65955484.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam cumque numquam quos ipsam laudantium a saepe, architecto aliquam nostrum consequatur fuga quo animi error sint culpa voluptatum dolorem, officiis quibusdam ducimus impedit. Veritatis distinctio sed nisi suscipit rem qui doloremque iste quisquam alias iure quaerat eaque ipsum repellendus, blanditiis, praesentium laborum fugiat ipsa voluptas, aliquid ex totam. Ea blanditiis nostrum, neque illo a, minima molestias iusto qui atque nulla doloremque ducimus quasi natus tenetur ex harum sit. Quasi quo quidem facere et unde quae corporis possimus repellendus amet ullam nihil aperiam doloribus, eaque culpa modi ratione quis, nostrum debitis porro."
  },
  {
    name: "Fortres",
    image: "https://thumb9.shutterstock.com/display_pic_with_logo/357622/142342288/stock-photo-redwood-national-park-pathway-through-the-redwoods-giants-142342288.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam cumque numquam quos ipsam laudantium a saepe, architecto aliquam nostrum consequatur fuga quo animi error sint culpa voluptatum dolorem, officiis quibusdam ducimus impedit. Veritatis distinctio sed nisi suscipit rem qui doloremque iste quisquam alias iure quaerat eaque ipsum repellendus, blanditiis, praesentium laborum fugiat ipsa voluptas, aliquid ex totam. Ea blanditiis nostrum, neque illo a, minima molestias iusto qui atque nulla doloremque ducimus quasi natus tenetur ex harum sit. Quasi quo quidem facere et unde quae corporis possimus repellendus amet ullam nihil aperiam doloribus, eaque culpa modi ratione quis, nostrum debitis porro."
  }

]

function seedDB(){
  // Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
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
          Comment.create(
            {
              text: "This place is great",
              author: "Tess"
            }, function(err, comment){
              if(err){
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            });
        }
      });
    });
  });

}
module.exports = seedDB;
