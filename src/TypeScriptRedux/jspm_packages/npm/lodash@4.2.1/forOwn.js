/* */ 
var baseForOwn = require('./_baseForOwn'),
    toFunction = require('./_toFunction');
function forOwn(object, iteratee) {
  return object && baseForOwn(object, toFunction(iteratee));
}
module.exports = forOwn;
