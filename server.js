var express = require('express');
var app = express();
var bodyPraser = require('body-parser');
var morgan = require('morgan');

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/blog';
var _db;

app.use(morgan('dev'));
app.use(bodyPraser.json());
app.use(express('dist'));

MongoClient.connect(mongoUrl, function (err, db) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('connected to mongo');
  _db = db;
  app.listen(8888, function () {
    console.log('server is running at localhost:8888 ...');
  });
});

app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.post('/create',function(req, res, next) {
  var article = req.body;
  var collection = _db.collection('articles');

  if(!article.content || !article.title || !article.date){
    res.send({
      errcode: -1,
      errmsg: "params missed"
    });
    return;
  }
  collection.insert({
    content: article.content,
    title: article.title,
    date: article.date,
    cat1: article.cat1,
    cat2: article.cat2,
    tags: article.tags
  }, function(err,ret) {
     if (err) {
       console.error(err);
       res.status(500).end();
     } else {
       res.send({
         errcode: 0,
         errmsg: "ok"
       })
     }
  });

});

app.get('/get_articles',function (req, res, next) {
  var collection = _db.collection('articles');

  collection.find({}).toArray(function (err, ret) {
    if (err) {
      console.error(err);
      return;
    }
    res.json({
      errorcode: 0,
      errmsg: "ok",
      articles: ret
    });
  });
});


