var express = require('express');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var app = express();

app.get('/hello/there', function(req, res, next) {
  res.status(200).json('General Kenobi')
  next()
})

module.exports = app
