
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = express();
var app_name = require('./package.json').name + ' app';

app.use(bodyparser.json());

var router = express.Router();
var Evento = require('./models/Evento');

mongoose.connect(require('./package.json').bd, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/events', 1, (req, res) => {
  Evento.find()
  .exec()
  .then(x => res.status(200)
  .send(x))
})

app.get('/', function (req, res) {
  res.send(app_name + ' running');
});

app.listen(process.env.PORT, function () {
  console.log(app_name + ' listening on ' + process.env.HOST + ':' + process.env.PORT);
});

