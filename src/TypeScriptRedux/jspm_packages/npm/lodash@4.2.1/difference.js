/* */ 
var baseDifference = require('./_baseDifference'),
    baseFlatten = require('./_baseFlatten'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    rest = require('./rest');
var difference = rest(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, false, true)) : [];
});
module.exports = difference;
