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

var client = new Twitter({
    "consumer_key": "ZHKt18fetYKVXlR4tCAmbWmXB",
    "consumer_secret": "Ibck3UXLS1OqbsO52SbOi2S4DgjLAGyvpqMvetpXYnGCIP3Zoz",
    "access_token_key": "1674563780-LOeIBhl6NdfmvpceIAEutVvMertK3Lrgikt9x1W",
    "access_token_secret": "J29KxS9Qx8BlWVT0In6TfC0fA9XCSWFCENkAvqKpLa4sJ"
});

