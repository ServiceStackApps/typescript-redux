/* */ 
var baseIndexOf = require('./_baseIndexOf');
function arrayIncludes(array, value) {
  return !!array.length && baseIndexOf(array, value, 0) > -1;
}
module.exports = arrayIncludes;
