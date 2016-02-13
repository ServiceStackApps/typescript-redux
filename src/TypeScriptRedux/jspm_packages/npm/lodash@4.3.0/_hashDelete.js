/* */ 
var hashHas = require('./_hashHas');
function hashDelete(hash, key) {
  return hashHas(hash, key) && delete hash[key];
}
module.exports = hashDelete;
