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
//1a4b130f476c5cafe8a19d871bb670a1-us14

//AudienceID
//44be01369a
