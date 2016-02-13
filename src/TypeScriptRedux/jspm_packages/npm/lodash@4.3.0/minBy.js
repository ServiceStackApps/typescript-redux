/* */ 
var baseExtremum = require('./_baseExtremum'),
    baseIteratee = require('./_baseIteratee'),
    lt = require('./lt');
function minBy(array, iteratee) {
  return (array && array.length) ? baseExtremum(array, baseIteratee(iteratee), lt) : undefined;
}
module.exports = minBy;
