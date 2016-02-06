/* */ 
var baseIteratee = require('./_baseIteratee'),
    basePullAllBy = require('./_basePullAllBy');
function pullAllBy(array, values, iteratee) {
  return (array && array.length && values && values.length) ? basePullAllBy(array, values, baseIteratee(iteratee)) : array;
}
module.exports = pullAllBy;
