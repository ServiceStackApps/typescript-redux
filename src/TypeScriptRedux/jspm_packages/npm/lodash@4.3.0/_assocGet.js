/* */ 
var assocIndexOf = require('./_assocIndexOf');
function assocGet(array, key) {
  var index = assocIndexOf(array, key);
  return index < 0 ? undefined : array[index][1];
}
module.exports = assocGet;
