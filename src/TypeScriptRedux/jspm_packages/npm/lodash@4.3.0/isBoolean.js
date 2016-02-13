/* */ 
var isObjectLike = require('./isObjectLike');
var boolTag = '[object Boolean]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isBoolean(value) {
  return value === true || value === false || (isObjectLike(value) && objectToString.call(value) == boolTag);
}
module.exports = isBoolean;
