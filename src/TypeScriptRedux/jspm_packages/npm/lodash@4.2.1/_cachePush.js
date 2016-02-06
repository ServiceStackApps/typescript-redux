/* */ 
var isKeyable = require('./_isKeyable');
var HASH_UNDEFINED = '__lodash_hash_undefined__';
function cachePush(value) {
  var map = this.__data__;
  if (isKeyable(value)) {
    var data = map.__data__,
        hash = typeof value == 'string' ? data.string : data.hash;
    hash[value] = HASH_UNDEFINED;
  } else {
    map.set(value, HASH_UNDEFINED);
  }
}
module.exports = cachePush;
