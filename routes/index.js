var fileReader = require('../fileReader');

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.send('Success');
  });

  app.get('/api/places', function (req, res) {
    fileReader.readFromFile('./data/places.json', function (err, len, buffer) {
      res.send(buffer.toString('utf8', 0, len)); 
    });
  });

  app.get('/api/places/:id', function (req, res) {
    var placeId = req.params.id,
        places;
    
    fileReader.readFromFile('./data/places.json', function (err, len, buffer) {
      places = JSON.parse(buffer.toString('utf8', 0, len)).places;

      res.send(JSON.stringify(places[placeId]));
    });

  });
};
