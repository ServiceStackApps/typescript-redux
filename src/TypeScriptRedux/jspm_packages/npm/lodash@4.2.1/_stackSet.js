/* */ 
var MapCache = require('./_MapCache'),
    assocSet = require('./_assocSet');
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__,
      array = data.array;
  if (array) {
    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
      assocSet(array, key, value);
    } else {
      data.array = null;
      data.map = new MapCache(array);
    }
  }
  var map = data.map;
  if (map) {
    map.set(key, value);
  }
  return this;
}
module.exports = stackSet;
