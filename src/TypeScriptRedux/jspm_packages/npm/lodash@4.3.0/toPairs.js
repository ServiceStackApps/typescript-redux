/* */ 
var baseToPairs = require('./_baseToPairs'),
    keys = require('./keys');
function toPairs(object) {
  return baseToPairs(object, keys(object));
}
module.exports = toPairs;
