/* */ 
var baseDelay = require('./_baseDelay'),
    rest = require('./rest');
var defer = rest(function(func, args) {
  return baseDelay(func, 1, args);
});
module.exports = defer;
