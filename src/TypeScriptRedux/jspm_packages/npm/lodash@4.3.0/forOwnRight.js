/* */ 
var baseForOwnRight = require('./_baseForOwnRight'),
    toFunction = require('./_toFunction');
function forOwnRight(object, iteratee) {
  return object && baseForOwnRight(object, toFunction(iteratee));
}
module.exports = forOwnRight;
