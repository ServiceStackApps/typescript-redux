/* */ 
var eq = require('./eq');
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if ((!eq(objValue, value) || (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) || (value === undefined && !(key in object))) {
    object[key] = value;
  }
}
module.exports = assignValue;
