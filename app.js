//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
  // res.send("Server is up and running.");
});

app.post("/", function(req, res){
  var firstName = req.body.fName;
  var lastName = req.body.lName;
  var email = req.body.email;
  res.send(firstName + " " + lastName + " " + email);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});

// API key
// a6add93371aff7ac76c8035fe5f8f52f-us14

//AudienceID
//44be01369a
