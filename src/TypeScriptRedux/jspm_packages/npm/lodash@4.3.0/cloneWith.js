/* */ 
var baseClone = require('./_baseClone');
function cloneWith(value, customizer) {
  return baseClone(value, false, customizer);
}
module.exports = cloneWith;
