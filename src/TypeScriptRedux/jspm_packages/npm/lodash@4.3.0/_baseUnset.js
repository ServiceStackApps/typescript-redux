/* */ 
var baseToPath = require('./_baseToPath'),
    has = require('./has'),
    isKey = require('./_isKey'),
    last = require('./last'),
    parent = require('./_parent');
function baseUnset(object, path) {
  path = isKey(path, object) ? [path + ''] : baseToPath(path);
  object = parent(object, path);
  var key = last(path);
  return (object != null && has(object, key)) ? delete object[key] : true;
}
module.exports = baseUnset;
