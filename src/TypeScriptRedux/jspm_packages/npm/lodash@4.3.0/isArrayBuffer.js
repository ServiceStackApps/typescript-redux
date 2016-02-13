/* */ 
var isObjectLike = require('./isObjectLike');
var arrayBufferTag = '[object ArrayBuffer]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isArrayBuffer(value) {
  return isObjectLike(value) && objectToString.call(value) == arrayBufferTag;
}
module.exports = isArrayBuffer;
