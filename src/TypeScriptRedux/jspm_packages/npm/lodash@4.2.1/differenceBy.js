/* */ 
var baseDifference = require('./_baseDifference'),
    baseFlatten = require('./_baseFlatten'),
    baseIteratee = require('./_baseIteratee'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    last = require('./last'),
    rest = require('./rest');
var differenceBy = rest(function(array, values) {
  var iteratee = last(values);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, false, true), baseIteratee(iteratee)) : [];
});
module.exports = differenceBy;
