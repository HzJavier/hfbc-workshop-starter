var fs = require('fs');

exports.readFromFile = function (file, callback) {
  var buff = new Buffer(5000);
  fs.open(file, 'r', function (err, fd) {
    fs.fstat(fd, function (err, stats) {
      fs.read(fd, buff, 0, 5000, null, callback);
    });
  });
};
