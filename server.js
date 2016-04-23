var http = require("http");
var Twitter = require('twitter');
var path = require('path');
var url = require('url');

var express = require('express'),
    app = express();

var woeID;

app.use(express.static(path.join(__dirname, "client")));

// set up our routes
app.get("/hello", function (req, res) { res.send("Hello!"); });

app.get("/goodbye", function (req, res) { res.send("Goodbye!"); });

app.get("/", function (req, res) { 
    res.render('index.html')
});

app.get('/submit/:lat/:long', function(request, response) {
    var lat = request.params.lat;
    var long = request.params.long;
    var lolTweets = twitterwork(lat, long);
    response.send(lolTweets);
});


var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data); 
};

var config = new Twitter({
    "consumer_key": "13JLJWql12hgPTtx6P0SMZtqV",
    "consumer_secret": "vBUoWk2t65Ua3T0uV5JCM6BQ9tVJWduleJDC6PzEf62ZidUFTT",
    "access_token_key": "3290333605-jxIJwCoN94s3rQQFszVarmn6w5dEgQbVrGLrS28",
    "access_token_secret": "GkUSqpa6eh9c5dInB88KdJoRjt3mAbtgUu37qj2PvwLfc"
});

function twitterwork(lat, lng) {
    var myTweets;
    config.get('/trends/closest', {lat: lat, long: lng}, function(error, data, response) {
        if (!error) {
            console.log("Searching in... " + data[0].name);
            woeID = data[0].woeid;
            myTweets = mainCall(woeID);
            console.log(myTweets);
            return myTweets;
        } else {
            console.log(error);
        }
    });
    
}

function mainCall(id) {
    var bigTweets = [];
    config.get('/trends/place', {id: id}, function(error, data, response) {
        if (!error) {
            for (var k = 0; k < data[0].trends.length; k++) {
                if (data[0].trends[k].tweet_volume) {
                    bigTweets.push(data[0].trends[k].name);
                }
            }
            console.log(bigTweets);
            return "makes it here";
        } else {
            console.log(error);
            return "didn't work :(";
        }
    });
    
}

app.listen(8000, function () {
  console.log('Listening on port 8000');
});

