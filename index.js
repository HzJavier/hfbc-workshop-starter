var port = 5000;
var express = require('express'),
    app = express(),
    routes;

app.configure(function () {
  console.log('Configuring Express');
  app.use(express.static(__dirname + '/public'));
});

app.use(express.logger());

routes = require('./routes')(app);

port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
