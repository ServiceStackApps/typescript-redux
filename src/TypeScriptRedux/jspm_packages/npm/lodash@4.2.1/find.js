/* */ 
var baseEach = require('./_baseEach'),
    baseFind = require('./_baseFind'),
    baseFindIndex = require('./_baseFindIndex'),
    baseIteratee = require('./_baseIteratee'),
    isArray = require('./isArray');
function find(collection, predicate) {
  predicate = baseIteratee(predicate, 3);
  if (isArray(collection)) {
    var index = baseFindIndex(collection, predicate);
    return index > -1 ? collection[index] : undefined;
  }
  return baseFind(collection, predicate, baseEach);
}
module.exports = find;
