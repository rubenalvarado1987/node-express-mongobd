
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

var db = mongoose.connection;

var schema = new Schema({ aNumber: { type: Number, default: 4.815162342 }})
var M = db.model('M', schema)
var m = new M;
console.log(m.aNumber)

app.get('/', function (req, res) {
  res.send(app_name + ' running'+ 'a numer db: ' +m.aNumber);
});

app.listen(process.env.PORT, function () {
  console.log(app_name + ' listening on ' + process.env.HOST + ':' + process.env.PORT);
});

