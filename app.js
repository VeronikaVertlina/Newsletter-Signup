//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
  // res.send("Server is up and running.");
});

app.post("/", function(req, res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // res.send(firstName + " " + lastName + " " + email);
  //new variable called data going to set that as a new Javascript object
  //inside our data object, we have to provide all the key value pairs
  const data = {
    memebers: [
      email_address: email,
      status: "subscribed",
      merge_fiels: {
        FNAME: firstName,
        LNAME: lastName
      }
    ]
  };

  // I'm going to pass in my data in JSON.stringify()
  const jsonData = JSON.stringify(data);

  //going to pass url,options,callback function, which is going to give us
  //a respounse from the MailChimp server.
  //"https://$API_SERVER.api.mailchimp.com/3.0/lists"
  const url = "https://us14.api.mailchimp.com/3.0/lists/44be01369a" ;

  //Create some options and it's going to be a Javascript oblect
    const options = {
    method: "POST",
    auth: "VeronikaVertlina: 1a4b130f476c5cafe8a19d871bb670a1-us14"
  }
  https.request(url, options, function(){


  });
});

{
  "name": "$event_name",
  "contact": $footer_contact_info,
  "permission_reminder": "permission_reminder",
  "email_type_option": true,
  "campaign_defaults": $campaign_defaults
}

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});

// API key
//1a4b130f476c5cafe8a19d871bb670a1-us14

//AudienceID
//44be01369a
