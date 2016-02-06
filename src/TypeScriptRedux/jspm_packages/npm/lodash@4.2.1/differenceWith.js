/* */ 
var baseDifference = require('./_baseDifference'),
    baseFlatten = require('./_baseFlatten'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    last = require('./last'),
    rest = require('./rest');
var differenceWith = rest(function(array, values) {
  var comparator = last(values);
  if (isArrayLikeObject(comparator)) {
    comparator = undefined;
  }
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, false, true), undefined, comparator) : [];
});
module.exports = differenceWith;
