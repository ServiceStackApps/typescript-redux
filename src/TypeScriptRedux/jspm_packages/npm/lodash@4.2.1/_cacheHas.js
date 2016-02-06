/* */ 
var isKeyable = require('./_isKeyable');
var HASH_UNDEFINED = '__lodash_hash_undefined__';
function cacheHas(cache, value) {
  var map = cache.__data__;
  if (isKeyable(value)) {
    var data = map.__data__,
        hash = typeof value == 'string' ? data.string : data.hash;
    return hash[value] === HASH_UNDEFINED;
  }
  return map.has(value);
}
module.exports = cacheHas;
