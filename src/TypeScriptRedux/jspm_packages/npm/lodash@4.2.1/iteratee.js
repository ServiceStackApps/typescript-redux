/* */ 
var baseClone = require('./_baseClone'),
    baseIteratee = require('./_baseIteratee');
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
}
module.exports = iteratee;
