/* */ 
var baseExtremum = require('./_baseExtremum'),
    baseIteratee = require('./_baseIteratee'),
    gt = require('./gt');
function maxBy(array, iteratee) {
  return (array && array.length) ? baseExtremum(array, baseIteratee(iteratee), gt) : undefined;
}
module.exports = maxBy;
