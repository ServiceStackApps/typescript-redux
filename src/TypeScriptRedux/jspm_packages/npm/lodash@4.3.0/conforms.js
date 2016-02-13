/* */ 
var baseClone = require('./_baseClone'),
    baseConforms = require('./_baseConforms');
function conforms(source) {
  return baseConforms(baseClone(source, true));
}
module.exports = conforms;
