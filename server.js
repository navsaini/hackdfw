var http = require("http");
var Twitter = require('twitter');
var express = require('express'),
    app = express();

app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(8081);

//http.createServer(function (request, response) {
//
//   // Send the HTTP header
//   // HTTP Status: 200 : OK
//   // Content Type: text/plain
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//
//   // Send the response body as "Hello World"
//   response.end('Twitter server\n');
//}).listen(8081);

// set up our routes
app.get("/hello", function (req, res) { res.send("Hello!"); });

app.get("/goodbye", function (req, res) { res.send("Goodbye!"); });

app.get("/", function (req, res) { res.send("This is the root route!"); });

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-node-client').Twitter;

var config = {
    "consumer_key": "13JLJWql12hgPTtx6P0SMZtqV",
    "consumer_secret": "vBUoWk2t65Ua3T0uV5JCM6BQ9tVJWduleJDC6PzEf62ZidUFTT",
    "access_token_key": "3290333605-jxIJwCoN94s3rQQFszVarmn6w5dEgQbVrGLrS28",
    "access_token_secret": "GkUSqpa6eh9c5dInB88KdJoRjt3mAbtgUu37qj2PvwLfc"
};

var twitter = new Twitter(config);

//client.get('trends/closest', function(error, response) {
//    console.log(response);
//});

twitter.getCustomApiCall('/trends/closest', error, success);

    

