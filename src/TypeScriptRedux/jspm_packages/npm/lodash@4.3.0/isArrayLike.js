/* */ 
var getLength = require('./_getLength'),
    isFunction = require('./isFunction'),
    isLength = require('./isLength');
function isArrayLike(value) {
  return value != null && !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
}
module.exports = isArrayLike;
