/* */ 
var isObjectLike = require('./isObjectLike');
var numberTag = '[object Number]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isNumber(value) {
  return typeof value == 'number' || (isObjectLike(value) && objectToString.call(value) == numberTag);
}
module.exports = isNumber;
