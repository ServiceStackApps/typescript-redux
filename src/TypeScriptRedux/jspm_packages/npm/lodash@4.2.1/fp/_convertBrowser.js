/* */ 
var baseConvert = require('./_baseConvert');
function browserConvert(lodash) {
  return baseConvert(lodash, lodash);
}
module.exports = browserConvert;
