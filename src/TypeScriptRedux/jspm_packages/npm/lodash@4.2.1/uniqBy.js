/* */ 
var baseIteratee = require('./_baseIteratee'),
    baseUniq = require('./_baseUniq');
function uniqBy(array, iteratee) {
  return (array && array.length) ? baseUniq(array, baseIteratee(iteratee)) : [];
}
module.exports = uniqBy;
