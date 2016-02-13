/* */ 
var arrayMap = require('./_arrayMap'),
    baseIntersection = require('./_baseIntersection'),
    last = require('./last'),
    rest = require('./rest'),
    toArrayLikeObject = require('./_toArrayLikeObject');
var intersectionWith = rest(function(arrays) {
  var comparator = last(arrays),
      mapped = arrayMap(arrays, toArrayLikeObject);
  if (comparator === last(mapped)) {
    comparator = undefined;
  } else {
    mapped.pop();
  }
  return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped, undefined, comparator) : [];
});
module.exports = intersectionWith;
