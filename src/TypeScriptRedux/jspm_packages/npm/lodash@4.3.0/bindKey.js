/* */ 
var createWrapper = require('./_createWrapper'),
    replaceHolders = require('./_replaceHolders'),
    rest = require('./rest');
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    PARTIAL_FLAG = 32;
var bindKey = rest(function(object, key, partials) {
  var bitmask = BIND_FLAG | BIND_KEY_FLAG;
  if (partials.length) {
    var placeholder = bindKey.placeholder,
        holders = replaceHolders(partials, placeholder);
    bitmask |= PARTIAL_FLAG;
  }
  return createWrapper(key, bitmask, object, partials, holders);
});
bindKey.placeholder = {};
module.exports = bindKey;
