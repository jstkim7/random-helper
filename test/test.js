var assert = require("assert");
var randomHelper = require('../src/random-helper');

describe('RandomHelper', function() {

  var rh = new randomHelper();

  describe('#randomInt()', function() {
    it ('should be positive by default', function() {
      var randInt = rh.randomInt(1, 5);
      var greater = randInt > 0;
      assert.equal(true, greater);
    });

    it('should return an integer', function() {
      var randInt = rh.randomInt(0, 5, true);
      var remainder = randInt % 1;
      assert.equal(0, remainder);
    });

    it('should return a positive number', function() {
      var randInt = rh.randomInt(1, 5, true);
      var greater = randInt > 0;
      assert.equal(true, greater);
    });

    it('should return a negative number', function() {
      var randInt = rh.randomInt(1, 5, false);
      var lessThan = randInt < 0;
      assert.equal(true, lessThan);
    });
  });

  describe('#randomFloat()', function() {
    it ('should be positive by default', function() {
      var randFloat = rh.randomFloat(1.100, 5.900);
      var greater = randFloat > 0;
      assert.equal(true, greater);
    });

    it('should return a float', function() {
      var randInt = rh.randomInt(0.500, 5.200);
      var remainder = randInt % 1 === 0;
      assert.equal(false, remainder);
    });

    it('should return a positive number', function() {
      var randInt = rh.randomInt(0.500, 5.200, true);
      var greater = randInt > 0;
      assert.equal(true, greater);
    });

    it('should return a negative number', function() {
      var randInt = rh.randomInt(0.200, 5.200, false);
      var lessThan = randInt < 0;
      assert.equal(true, lessThan);
    });
  });
});