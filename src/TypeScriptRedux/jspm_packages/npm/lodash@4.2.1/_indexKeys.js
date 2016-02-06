/* */ 
var baseTimes = require('./_baseTimes'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isLength = require('./isLength'),
    isString = require('./isString');
function indexKeys(object) {
  var length = object ? object.length : undefined;
  if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
    return baseTimes(length, String);
  }
  return null;
}
module.exports = indexKeys;
