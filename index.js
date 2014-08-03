var express = require('express'), http = require('http');
var fs = require('fs');

var data = fs.readFileSync('index.html', 'utf-8');

var app = express();
var server = http.createServer(app);

app.get('/', function(request, response) {
  response.send(data);
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Node app is running at localhost:" + port);
});
