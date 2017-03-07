var restify = require('restify');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();

server.get('/hello/there', function(req, res, next) {
  res.send('General Kenobi')
  next()
})

module.exports = server
