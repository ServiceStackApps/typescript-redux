/* */ 
var apply = require('./_apply'),
    arrayPush = require('./_arrayPush'),
    rest = require('./rest'),
    toInteger = require('./toInteger');
var FUNC_ERROR_TEXT = 'Expected a function';
var nativeMax = Math.max;
function spread(func, start) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  start = start === undefined ? 0 : nativeMax(toInteger(start), 0);
  return rest(function(args) {
    var array = args[start],
        otherArgs = args.slice(0, start);
    if (array) {
      arrayPush(otherArgs, array);
    }
    return apply(func, this, otherArgs);
  });
}
module.exports = spread;
