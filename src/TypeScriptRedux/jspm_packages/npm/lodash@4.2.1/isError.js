/* */ 
var isObjectLike = require('./isObjectLike');
var errorTag = '[object Error]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isError(value) {
  return isObjectLike(value) && typeof value.message == 'string' && objectToString.call(value) == errorTag;
}
module.exports = isError;
