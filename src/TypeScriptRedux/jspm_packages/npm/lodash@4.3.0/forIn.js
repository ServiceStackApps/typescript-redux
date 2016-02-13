/* */ 
var baseFor = require('./_baseFor'),
    keysIn = require('./keysIn'),
    toFunction = require('./_toFunction');
function forIn(object, iteratee) {
  return object == null ? object : baseFor(object, toFunction(iteratee), keysIn);
}
module.exports = forIn;
