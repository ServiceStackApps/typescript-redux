/* */ 
var baseDifference = require('./_baseDifference'),
    isArrayLikeObject = require('./isArrayLikeObject'),
    rest = require('./rest');
var without = rest(function(array, values) {
  return isArrayLikeObject(array) ? baseDifference(array, values) : [];
});
module.exports = without;
