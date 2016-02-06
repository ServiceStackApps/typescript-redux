/* */ 
var baseForOwn = require('./_baseForOwn'),
    baseIteratee = require('./_baseIteratee');
function mapKeys(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);
  baseForOwn(object, function(value, key, object) {
    result[iteratee(value, key, object)] = value;
  });
  return result;
}
module.exports = mapKeys;
