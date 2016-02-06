/* */ 
var baseIteratee = require('./_baseIteratee'),
    baseSortedUniqBy = require('./_baseSortedUniqBy');
function sortedUniqBy(array, iteratee) {
  return (array && array.length) ? baseSortedUniqBy(array, baseIteratee(iteratee)) : [];
}
module.exports = sortedUniqBy;
