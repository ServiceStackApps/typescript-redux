/* */ 
var apply = require('./_apply'),
    baseEach = require('./_baseEach'),
    baseInvoke = require('./_baseInvoke'),
    isArrayLike = require('./isArrayLike'),
    isKey = require('./_isKey'),
    rest = require('./rest');
var invokeMap = rest(function(collection, path, args) {
  var index = -1,
      isFunc = typeof path == 'function',
      isProp = isKey(path),
      result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function(value) {
    var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
    result[++index] = func ? apply(func, value, args) : baseInvoke(value, path, args);
  });
  return result;
});
module.exports = invokeMap;
