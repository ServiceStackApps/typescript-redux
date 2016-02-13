/* */ 
var baseForRight = require('./_baseForRight'),
    keysIn = require('./keysIn'),
    toFunction = require('./_toFunction');
function forInRight(object, iteratee) {
  return object == null ? object : baseForRight(object, toFunction(iteratee), keysIn);
}
module.exports = forInRight;
