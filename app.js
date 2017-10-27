var express = require('express');
var app = express();

app.set("view engine", "enj");

app.get("/", function(req, res){
  res.render('home');
});

app.listen(process.env.PORT, process.env.OP, function(){
  console.log("Server starRt");
});
