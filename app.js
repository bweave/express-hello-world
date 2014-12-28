var express = require('express'),
    app     = express(),
    swig    = require('swig'),
    server;

// Template Engine Setup
// Swig will cache templates for you, so
// disable Express's caching
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('view cache', false);

// Routes
app.get('/', function (req, res) {
  res.render('index', {
    activePage: 'home'
  });
});

app.get('/hello', function (req, res) {
  res.render('hello', {
    activePage: 'hello'
  });
});

// Fire it up
server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('ExpressApp listening at http://%s:%s', host, port);

});
