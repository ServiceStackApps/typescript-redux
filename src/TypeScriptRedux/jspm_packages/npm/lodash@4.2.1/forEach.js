/* */ 
var arrayEach = require('./_arrayEach'),
    baseEach = require('./_baseEach'),
    isArray = require('./isArray'),
    toFunction = require('./_toFunction');
function forEach(collection, iteratee) {
  return (typeof iteratee == 'function' && isArray(collection)) ? arrayEach(collection, iteratee) : baseEach(collection, toFunction(iteratee));
}
module.exports = forEach;
