// Load the express module (Where do you think this comes from?)
var express = require("express");

// invoke var express and store the resulting application in var app
var app = express();
var count = 0;

app.get('/', function (req, res){
    count++;
    res.render('index.ejs', {count: count});
});
// route to process new user form data:
app.post('/count', function (req, res){
    //code to add user to db goes here!
    count++;
    res.redirect('/');
});

app.post('/reset', function (req, res){
    //code to add user to db goes here!
    count = 0;
    res.redirect('/');
});


// Tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});
// this line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)