/* */ 
var arrayReduce = require('./_arrayReduce');
function basePick(object, props) {
  object = Object(object);
  return arrayReduce(props, function(result, key) {
    if (key in object) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
module.exports = basePick;
