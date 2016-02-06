/* */ 
var isArray = require('./isArray');
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (typeof value == 'number') {
    return true;
  }
  return !isArray(value) && (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object)));
}
module.exports = isKey;
