/* */ 
var arrayMap = require('./_arrayMap'),
    baseIndexOf = require('./_baseIndexOf');
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function basePullAllBy(array, values, iteratee) {
  var index = -1,
      length = values.length,
      seen = array;
  if (iteratee) {
    seen = arrayMap(array, function(value) {
      return iteratee(value);
    });
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;
    while ((fromIndex = baseIndexOf(seen, computed, fromIndex)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}
module.exports = basePullAllBy;
