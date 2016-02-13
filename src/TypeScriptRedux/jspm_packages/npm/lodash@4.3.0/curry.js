/* */ 
var createWrapper = require('./_createWrapper');
var CURRY_FLAG = 8;
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrapper(func, CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}
curry.placeholder = {};
module.exports = curry;
