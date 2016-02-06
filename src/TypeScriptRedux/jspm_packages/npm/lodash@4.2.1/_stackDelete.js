/* */ 
var assocDelete = require('./_assocDelete');
function stackDelete(key) {
  var data = this.__data__,
      array = data.array;
  return array ? assocDelete(array, key) : data.map['delete'](key);
}
module.exports = stackDelete;
