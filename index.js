var express = require('express'), http = require('http');
var fs = require('fs');

var data = fs.readFileSync('index.html', 'utf-8');

<<<<<<< HEAD
var app = express();
var server = http.createServer(app);
=======
var app = express.createServer(express.logger());
>>>>>>> 719c8e5ce612ac15cb98f223f030b3a5ea09630c

app.get('/', function(request, response) {
  response.send(data);
});

<<<<<<< HEAD
var port = process.env.PORT || 5000;
=======
var port = process.env.PORT || 5000; 
>>>>>>> 719c8e5ce612ac15cb98f223f030b3a5ea09630c

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});
