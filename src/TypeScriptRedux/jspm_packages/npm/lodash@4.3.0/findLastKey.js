/* */ 
var baseFind = require('./_baseFind'),
    baseForOwnRight = require('./_baseForOwnRight'),
    baseIteratee = require('./_baseIteratee');
function findLastKey(object, predicate) {
  return baseFind(object, baseIteratee(predicate, 3), baseForOwnRight, true);
}
module.exports = findLastKey;
