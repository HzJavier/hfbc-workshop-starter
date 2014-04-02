module.exports = function (app) {

  var places = [
    {
      name: 'Home',
      address: 'Guadalajara'
    },
    {
      name: 'ITESM',
      address: 'Zapopan'
    }
  ];

  app.get('/', function (req, res) {
    res.send('Success');
  });

  app.get('/api/places', function (req, res) {
    res.send(JSON.stringify(places)); 
  });

  app.get('/api/places/:id', function (req, res) {
    var placeId = req.params.id;
    res.send(JSON.stringify(places[placeId]));
  });
};
