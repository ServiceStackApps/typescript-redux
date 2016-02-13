/* */ 
var baseConvert = require('./_baseConvert');
function browserConvert(lodash, options) {
  return baseConvert(lodash, lodash, undefined, options);
}
module.exports = browserConvert;
