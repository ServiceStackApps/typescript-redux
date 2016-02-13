/* */ 
var assocIndexOf = require('./_assocIndexOf');
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function assocDelete(array, key) {
  var index = assocIndexOf(array, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = array.length - 1;
  if (index == lastIndex) {
    array.pop();
  } else {
    splice.call(array, index, 1);
  }
  return true;
}
module.exports = assocDelete;
