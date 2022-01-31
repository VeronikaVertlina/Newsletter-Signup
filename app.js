//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing");
// const request = require("request");
// const https = require("https");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mailchimp.setConfig({
  apiKey: "a4e784b57037cec2e2bf370ead4f077b",
  server: "us14"
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
  // res.send("Server is up and running.");
});

app.post("/", function(req, res){
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  console.log(req.body.email);

  const listId = "44be01369a";
  const subscribingUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  };

  // res.send(firstName + " " + lastName + " " + email);
  //new variable called data going to set that as a new Javascript object
  //inside our data object, we have to provide all the key value pairs
async function run() {
  try {
    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName
      }
    });

    console.log("Succeddfuly added contact as an audience member. The contact's id is " + response.id + " .");
    res.sendFile(__dirname + "/success.html");
  } catch (e) {
    res.sendFile(__dirname + "/failure.html");
  }
}
run();
});


app.post("/failure.html", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is running on port 3000.");
});


  // // I'm going to pass in my data in JSON.stringify()
  // const jsonData = JSON.stringify(data);
  //
  // //going to pass url,options,callback function, which is going to give us
  // //a respounse from the MailChimp server.
  // //"https://$API_SERVER.api.mailchimp.com/3.0/lists"
  // const url = "https://us14.api.mailchimp.com/3.0/lists/44be01369a" ;
  //
  // //Create some options and it's going to be a Javascript oblect
  // const options = {
  //   method: "POST",
  //   auth: "Veronika Vertlina:1a4b130f476c5cafe8a19d871bb670a1-us14"
  // }
  // const request = https.request(url, options, function(response){
  //   response.on("data", function(data){
  //     console.log(JSON.parse(data));
  //   });
  // });
  //
  // request.write(jsonData);
  // request.end();
// });

// API key
//1a4b130f476c5cafe8a19d871bb670a1-us14

//AudienceID
//44be01369a
