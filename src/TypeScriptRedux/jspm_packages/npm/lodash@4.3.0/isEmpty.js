/* */ 
var isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isArrayLike = require('./isArrayLike'),
    isFunction = require('./isFunction'),
    isString = require('./isString');
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function isEmpty(value) {
  if (isArrayLike(value) && (isArray(value) || isString(value) || isFunction(value.splice) || isArguments(value))) {
    return !value.length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
module.exports = isEmpty;
