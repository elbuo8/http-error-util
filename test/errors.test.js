'use strict';

var assert = require('assert');
var httpErrors = require('../');

describe('errors', function() {
  describe('#constructor', function() {
    it('should return an Error with name, message & status properties given a constant', function() {
      var err = new httpErrors(httpErrors.OK, 'OK');
      assert(err);
      assert(err.name);
      assert(err.message);
      assert(err.status);
    });
    it('should return an Error with name, message & status properties given a number', function() {
      var err = httpErrors(400, 'OK');
      assert(err);
      assert.equal(err.name, 'Bad Request');
      assert(err.message);
      assert(err.status);
    });
    it('should throw an error if the code isnt supported', function() {
      assert.throws(function() {httpErrors(1, 'test');}, 'Invalid HTTP Status Code');
    });
  });
});
