'use strict';

var assert = require('assert');
var httpErrors = require('../');

describe('errors', function() {
  describe('#getError', function() {
    it('should return an Error with name, message & status properties given a constant', function() {
      var err = httpErrors.getError(httpErrors.OK, 'OK');
      assert(err);
      assert(err.name);
      assert(err.message);
      assert(err.status);
    });
    it('should return an Error with name, message & status properties given a number', function() {
      var err = httpErrors.getError(200, 'OK');
      assert(err);
      assert(err.name);
      assert(err.message);
      assert(err.status);
    });
    it('should throw an error if the code isnt supported', function() {
      assert.throws(function() {httpErrors.getError(1, 'test');}, 'Invalid HTTP Status Code');
    });
  });
});
