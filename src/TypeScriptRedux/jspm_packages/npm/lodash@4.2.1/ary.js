/* */ 
var createWrapper = require('./_createWrapper');
var ARY_FLAG = 128;
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrapper(func, ARY_FLAG, undefined, undefined, undefined, undefined, n);
}
module.exports = ary;
