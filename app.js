const express = require('express')
const expressJWT = require('express-jwt')
const jwt = require('jsonwebtoken')
const secret = 'Did you ever hear the tragedy of Darth Plagueis the Wise?'
const bodyParser = require('body-parser')

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(expressJWT({ secret: secret }).unless({path:[/\/login\/.*/]}))

app.get('/login/:username', function(req, res, next) {
  var token = jwt.sign({ username: req.params.username}, secret)
  // console.log(req.params.username)
  res.status(200).json(token)
  next()
})
app.get('/hello/there', function(req, res, next) {
  res.status(200).json('General Kenobi')
  next()
})

module.exports = app
