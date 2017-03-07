const app = require('./app')
const port = 8080

app.listen(8080, function() {
  console.log('%s listening on port %d', app.name, 8080)
});

