
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var app_name = require('./package.json').name + ' app';

app.use(bodyparser.json());

const mongoose = require('mongoose');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://serveralvarado:Gsx400..@cluster0-whmwn.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {

    var cursor = db.collection('test').find();

    cursor.each(function(err, doc) {

        console.log(doc);

    });
}); 



app.get('/', function (req, res) {
  res.send(app_name + ' running');
  console.log('runnning APP OK');
});

app.listen(process.env.PORT, function () {
  console.log(app_name + ' listening on ' + process.env.HOST + ':' + process.env.PORT);
});

