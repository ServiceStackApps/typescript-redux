/* */ 
var baseClone = require('./_baseClone'),
    baseMatchesProperty = require('./_baseMatchesProperty');
function matchesProperty(path, srcValue) {
  return baseMatchesProperty(path, baseClone(srcValue, true));
}
module.exports = matchesProperty;
