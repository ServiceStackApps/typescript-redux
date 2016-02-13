/* */ 
var baseToPairs = require('./_baseToPairs'),
    keysIn = require('./keysIn');
function toPairsIn(object) {
  return baseToPairs(object, keysIn(object));
}
module.exports = toPairsIn;
