const app = require('./app')

app.listen(8080, function() {
  console.log('%s listening at %s', app.name, app.url);
});

