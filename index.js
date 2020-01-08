
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = express();
var app_name = require('./package.json').name + ' app';
var bd = require('./package.json').bd;

app.use(bodyparser.json());

var router = express.Router();
var Evento = require('./models/Evento');

mongoose.connect(bd, { useNewUrlParser: true, useUnifiedTopology: true });




app.get('/', function (req, res) {
  res.send(app_name + ' running');
  console.log('mongose:::',mongoose);
});

app.listen(process.env.PORT, function () {
  console.log(app_name + ' listening on ' + process.env.HOST + ':' + process.env.PORT);
});

