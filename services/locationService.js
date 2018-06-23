const https = require('https');
var url = 'https://shiftstestapi.firebaseio.com/locations.json';

var LocationService = function () {

}

LocationService.prototype.getLocations = function() {
  https.get(url,(res) => {
    res.on('data', (d) => {
      return d;
    });

  }).on('error', (e) => {
    console.error(e);
  });

}

module.exports = LocationService;

