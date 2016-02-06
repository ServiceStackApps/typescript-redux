/* */ 
var nativeCreate = require('./_nativeCreate');
var HASH_UNDEFINED = '__lodash_hash_undefined__';
function hashSet(hash, key, value) {
  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
}
module.exports = hashSet;
