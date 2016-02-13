/* */ 
var baseIndexOf = require('./_baseIndexOf'),
    toInteger = require('./toInteger');
var nativeMax = Math.max;
function indexOf(array, value, fromIndex) {
  var length = array ? array.length : 0;
  if (!length) {
    return -1;
  }
  fromIndex = toInteger(fromIndex);
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return baseIndexOf(array, value, fromIndex);
}
module.exports = indexOf;
