/* */ 
var arrayFilter = require('./_arrayFilter'),
    baseFilter = require('./_baseFilter'),
    baseIteratee = require('./_baseIteratee'),
    isArray = require('./isArray');
function reject(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  predicate = baseIteratee(predicate, 3);
  return func(collection, function(value, index, collection) {
    return !predicate(value, index, collection);
  });
}
module.exports = reject;
