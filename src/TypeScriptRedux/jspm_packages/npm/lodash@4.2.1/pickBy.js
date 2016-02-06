/* */ 
var baseIteratee = require('./_baseIteratee'),
    basePickBy = require('./_basePickBy');
function pickBy(object, predicate) {
  return object == null ? {} : basePickBy(object, baseIteratee(predicate, 2));
}
module.exports = pickBy;
