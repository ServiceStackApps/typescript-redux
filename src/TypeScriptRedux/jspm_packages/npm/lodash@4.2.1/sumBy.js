/* */ 
var baseIteratee = require('./_baseIteratee'),
    baseSum = require('./_baseSum');
function sumBy(array, iteratee) {
  return (array && array.length) ? baseSum(array, baseIteratee(iteratee)) : 0;
}
module.exports = sumBy;
