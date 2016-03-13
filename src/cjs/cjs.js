/* eslint-disable */

var _ = require('underscore');

/**
 * Provides a simple vanilla CJS test that matches the output of the JSPM `Test` class.
 */
var Test = function(){};

Test.prototype.run = function() { return _.extend({ test: 'testvalue' }, { test2: 'testvalue2' }); };

exports = module.exports = new Test();