/* */ 
var baseForIn = require('./_baseForIn');
function basePickBy(object, predicate) {
  var result = {};
  baseForIn(object, function(value, key) {
    if (predicate(value, key)) {
      result[key] = value;
    }
  });
  return result;
}
module.exports = basePickBy;
