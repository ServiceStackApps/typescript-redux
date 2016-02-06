/* */ 
var assocHas = require('./_assocHas');
function stackHas(key) {
  var data = this.__data__,
      array = data.array;
  return array ? assocHas(array, key) : data.map.has(key);
}
module.exports = stackHas;
