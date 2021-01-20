// Dependencies
var express = require("express");
var http = require("http");
var fs = require("fs");
var path = require("path")
var app = express()

// Set our port to 8080
var PORT = 8080;
  
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create our server
//var server = http.createServer(handleRequest);

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "main.html"));
})

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})

app.get("/resis", function(req, res) {
        res.sendFile(path.join(__dirname, "resis.html"));
})

app.post("/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newResis = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    // console.log(newCharacter);
  
    // characters.push(newCharacter);
  
    res.json(newResis);
  });



// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });