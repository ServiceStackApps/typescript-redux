/* */ 
var toNumber = require('./toNumber');
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;
function toInteger(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  var remainder = value % 1;
  return value === value ? (remainder ? value - remainder : value) : 0;
}
module.exports = toInteger;
