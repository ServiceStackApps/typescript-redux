/* */ 
var assocGet = require('./_assocGet');
function stackGet(key) {
  var data = this.__data__,
      array = data.array;
  return array ? assocGet(array, key) : data.map.get(key);
}
module.exports = stackGet;
