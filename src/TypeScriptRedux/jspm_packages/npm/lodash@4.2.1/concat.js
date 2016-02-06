/* */ 
var arrayConcat = require('./_arrayConcat'),
    baseFlatten = require('./_baseFlatten'),
    isArray = require('./isArray'),
    rest = require('./rest');
var concat = rest(function(array, values) {
  if (!isArray(array)) {
    array = array == null ? [] : [Object(array)];
  }
  values = baseFlatten(values);
  return arrayConcat(array, values);
});
module.exports = concat;
