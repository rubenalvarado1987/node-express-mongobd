
var express = require('express');
var app = express();
var app_name = require('./package.json').name + ' app'

app.get('/', function (req, res) {
  res.send(app_name + ' running');
});

app.listen(process.env.PORT, function () {
  console.log(app_name + ' listening on ' + process.env.HOST + ':' + process.env.PORT);
});

