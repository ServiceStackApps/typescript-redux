/* */ 
var arrayPush = require('./_arrayPush'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isArrayLikeObject = require('./isArrayLikeObject');
function baseFlatten(array, isDeep, isStrict, result) {
  result || (result = []);
  var index = -1,
      length = array.length;
  while (++index < length) {
    var value = array[index];
    if (isArrayLikeObject(value) && (isStrict || isArray(value) || isArguments(value))) {
      if (isDeep) {
        baseFlatten(value, isDeep, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
module.exports = baseFlatten;
