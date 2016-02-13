/* */ 
var arrayMap = require('./_arrayMap'),
    isArray = require('./isArray'),
    stringToPath = require('./_stringToPath');
function toPath(value) {
  return isArray(value) ? arrayMap(value, String) : stringToPath(value);
}
module.exports = toPath;
