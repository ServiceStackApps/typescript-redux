/* */ 
var isArray = require('./isArray'),
    isObjectLike = require('./isObjectLike');
var stringTag = '[object String]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isString(value) {
  return typeof value == 'string' || (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}
module.exports = isString;
