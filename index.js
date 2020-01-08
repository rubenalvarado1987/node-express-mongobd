
var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var app_name = require('./package.json').name + ' app';

app.use(bodyparser.json());

const mongoose = require('mongoose');


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://serveralvarado:Gsx400..@cluster0-whmwn.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("test");

  var cursor = collection.find();

  cursor.each(function(err, doc) {

      console.log(doc);

  });
  // perform actions on the collection object
  console.log("collection:::",collection);

  
 

  client.close();
});


app.get('/', function (req, res) {
  res.send(app_name + ' running');
  console.log('runnning APP OK');
});

app.listen(process.env.PORT, function () {
  console.log(app_name + ' listening on ' + process.env.HOST + ':' + process.env.PORT);
});

