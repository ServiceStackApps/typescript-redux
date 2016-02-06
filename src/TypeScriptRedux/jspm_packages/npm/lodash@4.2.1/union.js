/* */ 
var baseFlatten = require('./_baseFlatten'),
    baseUniq = require('./_baseUniq'),
    rest = require('./rest');
var union = rest(function(arrays) {
  return baseUniq(baseFlatten(arrays, false, true));
});
module.exports = union;
