/* */ 
var baseClamp = require('./_baseClamp'),
    baseRandom = require('./_baseRandom'),
    toArray = require('./toArray'),
    toInteger = require('./toInteger');
function sampleSize(collection, n) {
  var index = -1,
      result = toArray(collection),
      length = result.length,
      lastIndex = length - 1;
  n = baseClamp(toInteger(n), 0, length);
  while (++index < n) {
    var rand = baseRandom(index, lastIndex),
        value = result[rand];
    result[rand] = result[index];
    result[index] = value;
  }
  result.length = n;
  return result;
}
module.exports = sampleSize;
