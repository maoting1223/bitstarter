var express = require('express');
var fs = require('fs');

var data = fs.readFileSync('index.html', 'utf-8');
var logger = require('morgan');

var app = express.createServer(logger);

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});
