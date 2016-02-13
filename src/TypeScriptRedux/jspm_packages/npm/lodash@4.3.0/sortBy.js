/* */ 
var baseFlatten = require('./_baseFlatten'),
    baseOrderBy = require('./_baseOrderBy'),
    isIterateeCall = require('./_isIterateeCall'),
    rest = require('./rest');
var sortBy = rest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees.length = 1;
  }
  return baseOrderBy(collection, baseFlatten(iteratees), []);
});
module.exports = sortBy;
