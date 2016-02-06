/* */ 
var baseHas = require('./_baseHas'),
    hasPath = require('./_hasPath');
function has(object, path) {
  return hasPath(object, path, baseHas);
}
module.exports = has;
