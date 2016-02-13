/* */ 
var keys = require('./keys');
function baseConforms(source) {
  var props = keys(source),
      length = props.length;
  return function(object) {
    if (object == null) {
      return !length;
    }
    var index = length;
    while (index--) {
      var key = props[index],
          predicate = source[key],
          value = object[key];
      if ((value === undefined && !(key in Object(object))) || !predicate(value)) {
        return false;
      }
    }
    return true;
  };
}
module.exports = baseConforms;
