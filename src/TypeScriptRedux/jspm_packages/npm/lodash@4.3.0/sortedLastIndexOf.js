/* */ 
var baseSortedIndex = require('./_baseSortedIndex'),
    eq = require('./eq');
function sortedLastIndexOf(array, value) {
  var length = array ? array.length : 0;
  if (length) {
    var index = baseSortedIndex(array, value, true) - 1;
    if (eq(array[index], value)) {
      return index;
    }
  }
  return -1;
}
module.exports = sortedLastIndexOf;
