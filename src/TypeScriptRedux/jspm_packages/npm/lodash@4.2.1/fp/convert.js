/* */ 
var baseConvert = require('./_baseConvert'),
    util = require('./_util');
function convert(name, func) {
  return baseConvert(util, name, func);
}
module.exports = convert;
