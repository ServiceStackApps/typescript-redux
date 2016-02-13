/* */ 
var SetCache = require('./_SetCache'),
    arrayIncludes = require('./_arrayIncludes'),
    arrayIncludesWith = require('./_arrayIncludesWith'),
    arrayMap = require('./_arrayMap'),
    baseUnary = require('./_baseUnary'),
    cacheHas = require('./_cacheHas');
function baseIntersection(arrays, iteratee, comparator) {
  var includes = comparator ? arrayIncludesWith : arrayIncludes,
      othLength = arrays.length,
      othIndex = othLength,
      caches = Array(othLength),
      result = [];
  while (othIndex--) {
    var array = arrays[othIndex];
    if (othIndex && iteratee) {
      array = arrayMap(array, baseUnary(iteratee));
    }
    caches[othIndex] = !comparator && (iteratee || array.length >= 120) ? new SetCache(othIndex && array) : undefined;
  }
  array = arrays[0];
  var index = -1,
      length = array.length,
      seen = caches[0];
  outer: while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;
    if (!(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
      var othIndex = othLength;
      while (--othIndex) {
        var cache = caches[othIndex];
        if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator))) {
          continue outer;
        }
      }
      if (seen) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}
module.exports = baseIntersection;
