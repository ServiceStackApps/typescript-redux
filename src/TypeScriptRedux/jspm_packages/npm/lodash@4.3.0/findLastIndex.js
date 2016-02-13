/* */ 
var baseFindIndex = require('./_baseFindIndex'),
    baseIteratee = require('./_baseIteratee');
function findLastIndex(array, predicate) {
  return (array && array.length) ? baseFindIndex(array, baseIteratee(predicate, 3), true) : -1;
}
module.exports = findLastIndex;
