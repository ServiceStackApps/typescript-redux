/* */ 
var nativeCreate = require('./_nativeCreate');
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function hashGet(hash, key) {
  if (nativeCreate) {
    var result = hash[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
}
module.exports = hashGet;
