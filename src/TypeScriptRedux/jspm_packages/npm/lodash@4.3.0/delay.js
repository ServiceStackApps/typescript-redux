/* */ 
var baseDelay = require('./_baseDelay'),
    rest = require('./rest'),
    toNumber = require('./toNumber');
var delay = rest(function(func, wait, args) {
  return baseDelay(func, toNumber(wait) || 0, args);
});
module.exports = delay;
