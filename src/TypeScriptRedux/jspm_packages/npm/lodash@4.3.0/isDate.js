/* */ 
var isObjectLike = require('./isObjectLike');
var dateTag = '[object Date]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isDate(value) {
  return isObjectLike(value) && objectToString.call(value) == dateTag;
}
module.exports = isDate;
