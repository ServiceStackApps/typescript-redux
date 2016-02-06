/* */ 
var baseForOwn = require('./_baseForOwn'),
    baseIteratee = require('./_baseIteratee');
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);
  baseForOwn(object, function(value, key, object) {
    result[key] = iteratee(value, key, object);
  });
  return result;
}
module.exports = mapValues;
