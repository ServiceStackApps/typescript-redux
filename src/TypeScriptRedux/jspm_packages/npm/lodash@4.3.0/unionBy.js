/* */ 
var baseFlatten = require('./_baseFlatten'),
    baseIteratee = require('./_baseIteratee'),
    baseUniq = require('./_baseUniq'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    last = require('./last'),
    rest = require('./rest');
var unionBy = rest(function(arrays) {
  var iteratee = last(arrays);
  if (isArrayLikeObject(iteratee)) {
    iteratee = undefined;
  }
  return baseUniq(baseFlatten(arrays, false, true), baseIteratee(iteratee));
});
module.exports = unionBy;
