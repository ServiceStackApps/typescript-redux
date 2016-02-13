/* */ 
(function(process) {
  var baseSlice = require('./_baseSlice'),
      toInteger = require('./toInteger');
  var nativeCeil = Math.ceil,
      nativeMax = Math.max;
  function chunk(array, size) {
    size = nativeMax(toInteger(size), 0);
    var length = array ? array.length : 0;
    if (!length || size < 1) {
      return [];
    }
    var index = 0,
        resIndex = -1,
        result = Array(nativeCeil(length / size));
    while (index < length) {
      result[++resIndex] = baseSlice(array, index, (index += size));
    }
    return result;
  }
  module.exports = chunk;
})(require('process'));
