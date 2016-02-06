/* */ 
var baseFor = require('./_baseFor'),
    keysIn = require('./keysIn');
function baseForIn(object, iteratee) {
  return object == null ? object : baseFor(object, iteratee, keysIn);
}
module.exports = baseForIn;
