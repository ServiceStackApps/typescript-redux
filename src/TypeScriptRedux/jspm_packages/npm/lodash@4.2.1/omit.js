/* */ 
var arrayMap = require('./_arrayMap'),
    baseDifference = require('./_baseDifference'),
    baseFlatten = require('./_baseFlatten'),
    basePick = require('./_basePick'),
    keysIn = require('./keysIn'),
    rest = require('./rest');
var omit = rest(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(baseFlatten(props), String);
  return basePick(object, baseDifference(keysIn(object), props));
});
module.exports = omit;
