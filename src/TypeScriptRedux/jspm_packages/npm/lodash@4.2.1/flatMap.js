/* */ 
var baseFlatten = require('./_baseFlatten'),
    map = require('./map');
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee));
}
module.exports = flatMap;
