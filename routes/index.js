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
};
