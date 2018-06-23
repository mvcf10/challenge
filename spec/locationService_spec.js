const https = require('https');

var base_url = "https://shiftstestapi.firebaseio.com/locations.json"

describe("Remote API Test - Locations", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      https.request(base_url, function(response) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
