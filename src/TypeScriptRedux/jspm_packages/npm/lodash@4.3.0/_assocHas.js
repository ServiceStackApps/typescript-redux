/* */ 
var assocIndexOf = require('./_assocIndexOf');
function assocHas(array, key) {
  return assocIndexOf(array, key) > -1;
}
module.exports = assocHas;
