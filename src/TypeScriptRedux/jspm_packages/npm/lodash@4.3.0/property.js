/* */ 
var baseProperty = require('./_baseProperty'),
    basePropertyDeep = require('./_basePropertyDeep'),
    isKey = require('./_isKey');
function property(path) {
  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
}
module.exports = property;
