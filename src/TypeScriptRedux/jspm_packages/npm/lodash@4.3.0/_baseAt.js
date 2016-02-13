/* */ 
var get = require('./get');
function baseAt(object, paths) {
  var index = -1,
      isNil = object == null,
      length = paths.length,
      result = Array(length);
  while (++index < length) {
    result[index] = isNil ? undefined : get(object, paths[index]);
  }
  return result;
}
module.exports = baseAt;
