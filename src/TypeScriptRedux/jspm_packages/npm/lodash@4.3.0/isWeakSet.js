/* */ 
var isObjectLike = require('./isObjectLike');
var weakSetTag = '[object WeakSet]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isWeakSet(value) {
  return isObjectLike(value) && objectToString.call(value) == weakSetTag;
}
module.exports = isWeakSet;
