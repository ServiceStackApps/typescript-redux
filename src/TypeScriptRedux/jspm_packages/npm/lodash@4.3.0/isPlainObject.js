/* */ 
var isHostObject = require('./_isHostObject'),
    isObjectLike = require('./isObjectLike');
var objectTag = '[object Object]';
var objectProto = Object.prototype;
var funcToString = Function.prototype.toString;
var objectCtorString = funcToString.call(Object);
var objectToString = objectProto.toString;
var getPrototypeOf = Object.getPrototypeOf;
function isPlainObject(value) {
  if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = objectProto;
  if (typeof value.constructor == 'function') {
    proto = getPrototypeOf(value);
  }
  if (proto === null) {
    return true;
  }
  var Ctor = proto.constructor;
  return (typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}
module.exports = isPlainObject;
