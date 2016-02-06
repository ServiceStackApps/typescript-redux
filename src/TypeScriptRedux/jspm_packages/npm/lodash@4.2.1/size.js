/* */ 
var isArrayLike = require('./isArrayLike'),
    isString = require('./isString'),
    keys = require('./keys'),
    stringSize = require('./_stringSize');
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    var result = collection.length;
    return (result && isString(collection)) ? stringSize(collection) : result;
  }
  return keys(collection).length;
}
module.exports = size;
