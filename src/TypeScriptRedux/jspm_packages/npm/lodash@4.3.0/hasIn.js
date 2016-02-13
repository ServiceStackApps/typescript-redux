/* */ 
var baseHasIn = require('./_baseHasIn'),
    hasPath = require('./_hasPath');
function hasIn(object, path) {
  return hasPath(object, path, baseHasIn);
}
module.exports = hasIn;
