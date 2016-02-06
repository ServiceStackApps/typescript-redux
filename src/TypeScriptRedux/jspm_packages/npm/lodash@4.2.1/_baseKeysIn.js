/* */ 
var Reflect = require('./_Reflect'),
    iteratorToArray = require('./_iteratorToArray');
var objectProto = Object.prototype;
var enumerate = Reflect ? Reflect.enumerate : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;
function baseKeysIn(object) {
  object = object == null ? object : Object(object);
  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}
if (enumerate && !propertyIsEnumerable.call({'valueOf': 1}, 'valueOf')) {
  baseKeysIn = function(object) {
    return iteratorToArray(enumerate(object));
  };
}
module.exports = baseKeysIn;
