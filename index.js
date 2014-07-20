var express = require('express')
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.get('/about', function (req, res)
{
    res.render('index.html');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

