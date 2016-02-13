/* */ 
var baseClone = require('./_baseClone');
function cloneDeep(value) {
  return baseClone(value, true);
}
module.exports = cloneDeep;
