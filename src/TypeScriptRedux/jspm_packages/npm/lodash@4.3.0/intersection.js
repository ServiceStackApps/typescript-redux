/* */ 
var arrayMap = require('./_arrayMap'),
    baseIntersection = require('./_baseIntersection'),
    rest = require('./rest'),
    toArrayLikeObject = require('./_toArrayLikeObject');
var intersection = rest(function(arrays) {
  var mapped = arrayMap(arrays, toArrayLikeObject);
  return (mapped.length && mapped[0] === arrays[0]) ? baseIntersection(mapped) : [];
});
module.exports = intersection;
