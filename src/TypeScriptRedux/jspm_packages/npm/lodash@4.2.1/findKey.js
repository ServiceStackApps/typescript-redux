/* */ 
var baseFind = require('./_baseFind'),
    baseForOwn = require('./_baseForOwn'),
    baseIteratee = require('./_baseIteratee');
function findKey(object, predicate) {
  return baseFind(object, baseIteratee(predicate, 3), baseForOwn, true);
}
module.exports = findKey;
