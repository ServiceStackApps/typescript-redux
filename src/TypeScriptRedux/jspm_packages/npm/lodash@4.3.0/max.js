/* */ 
var baseExtremum = require('./_baseExtremum'),
    gt = require('./gt'),
    identity = require('./identity');
function max(array) {
  return (array && array.length) ? baseExtremum(array, identity, gt) : undefined;
}
module.exports = max;
