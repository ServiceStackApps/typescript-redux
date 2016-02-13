/* */ 
var isObject = require('./isObject');
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
function isFunction(value) {
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
module.exports = isFunction;
