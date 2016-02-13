/* */ 
var isFunction = require('./isFunction'),
    isHostObject = require('./_isHostObject'),
    isObjectLike = require('./isObjectLike');
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var objectProto = Object.prototype;
var funcToString = Function.prototype.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
function isNative(value) {
  if (value == null) {
    return false;
  }
  if (isFunction(value)) {
    return reIsNative.test(funcToString.call(value));
  }
  return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
}
module.exports = isNative;
