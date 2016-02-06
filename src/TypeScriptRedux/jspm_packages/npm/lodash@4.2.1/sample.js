/* */ 
var baseRandom = require('./_baseRandom'),
    isArrayLike = require('./isArrayLike'),
    values = require('./values');
function sample(collection) {
  var array = isArrayLike(collection) ? collection : values(collection),
      length = array.length;
  return length > 0 ? array[baseRandom(0, length - 1)] : undefined;
}
module.exports = sample;
