/* */ 
var arrayFilter = require('./_arrayFilter'),
    baseXor = require('./_baseXor'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    rest = require('./rest');
var xor = rest(function(arrays) {
  return baseXor(arrayFilter(arrays, isArrayLikeObject));
});
module.exports = xor;
