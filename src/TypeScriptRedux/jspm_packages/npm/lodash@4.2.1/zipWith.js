/* */ 
(function(process) {
  var rest = require('./rest'),
      unzipWith = require('./unzipWith');
  var zipWith = rest(function(arrays) {
    var length = arrays.length,
        iteratee = length > 1 ? arrays[length - 1] : undefined;
    iteratee = typeof iteratee == 'function' ? (arrays.pop(), iteratee) : undefined;
    return unzipWith(arrays, iteratee);
  });
  module.exports = zipWith;
})(require('process'));
