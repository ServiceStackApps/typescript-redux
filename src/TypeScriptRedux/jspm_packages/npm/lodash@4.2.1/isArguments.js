/* */ 
var isArrayLikeObject = require('./isArrayLikeObject');
var argsTag = '[object Arguments]';
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
function isArguments(value) {
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
module.exports = isArguments;
