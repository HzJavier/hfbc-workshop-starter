var port = 5000;
var express = require('express'),
    app = express();

port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log('Listening on port ' + port);
});
