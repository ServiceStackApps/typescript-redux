/* */ 
var eq = require('./eq');
function baseSortedUniqBy(array, iteratee) {
  var index = 0,
      length = array.length,
      value = array[0],
      computed = iteratee ? iteratee(value) : value,
      seen = computed,
      resIndex = 0,
      result = [value];
  while (++index < length) {
    value = array[index], computed = iteratee ? iteratee(value) : value;
    if (!eq(computed, seen)) {
      seen = computed;
      result[++resIndex] = value;
    }
  }
  return result;
}
module.exports = baseSortedUniqBy;
