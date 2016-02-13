/* */ 
var createWrapper = require('./_createWrapper'),
    replaceHolders = require('./_replaceHolders'),
    rest = require('./rest');
var BIND_FLAG = 1,
    PARTIAL_FLAG = 32;
var bind = rest(function(func, thisArg, partials) {
  var bitmask = BIND_FLAG;
  if (partials.length) {
    var placeholder = bind.placeholder,
        holders = replaceHolders(partials, placeholder);
    bitmask |= PARTIAL_FLAG;
  }
  return createWrapper(func, bitmask, thisArg, partials, holders);
});
bind.placeholder = {};
module.exports = bind;
