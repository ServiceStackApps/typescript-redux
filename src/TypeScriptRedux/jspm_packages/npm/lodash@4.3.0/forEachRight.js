/* */ 
var arrayEachRight = require('./_arrayEachRight'),
    baseEachRight = require('./_baseEachRight'),
    isArray = require('./isArray'),
    toFunction = require('./_toFunction');
function forEachRight(collection, iteratee) {
  return (typeof iteratee == 'function' && isArray(collection)) ? arrayEachRight(collection, iteratee) : baseEachRight(collection, toFunction(iteratee));
}
module.exports = forEachRight;
