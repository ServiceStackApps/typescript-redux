/* */ 
var baseFindIndex = require('./_baseFindIndex'),
    baseIteratee = require('./_baseIteratee');
function findIndex(array, predicate) {
  return (array && array.length) ? baseFindIndex(array, baseIteratee(predicate, 3)) : -1;
}
module.exports = findIndex;
