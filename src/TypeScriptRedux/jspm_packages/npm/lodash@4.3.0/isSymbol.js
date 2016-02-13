/* */ 
var isObjectLike = require('./isObjectLike');
var symbolTag = '[object Symbol]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isSymbol(value) {
  return typeof value == 'symbol' || (isObjectLike(value) && objectToString.call(value) == symbolTag);
}
module.exports = isSymbol;
