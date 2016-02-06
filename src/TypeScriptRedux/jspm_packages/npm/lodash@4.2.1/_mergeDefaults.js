/* */ 
var baseMerge = require('./_baseMerge'),
    isObject = require('./isObject');
function mergeDefaults(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, mergeDefaults, stack);
  }
  return objValue;
}
module.exports = mergeDefaults;
