/* */ 
var arrayFilter = require('./_arrayFilter'),
    baseXor = require('./_baseXor'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    last = require('./last'),
    rest = require('./rest');
var xorWith = rest(function(arrays) {
  var comparator = last(arrays);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator);
});
module.exports = xorWith;
