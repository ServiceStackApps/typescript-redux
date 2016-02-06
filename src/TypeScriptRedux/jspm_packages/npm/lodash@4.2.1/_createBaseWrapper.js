/* */ 
var createCtorWrapper = require('./_createCtorWrapper'),
    root = require('./_root');
var BIND_FLAG = 1;
function createBaseWrapper(func, bitmask, thisArg) {
  var isBind = bitmask & BIND_FLAG,
      Ctor = createCtorWrapper(func);
  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}
module.exports = createBaseWrapper;
