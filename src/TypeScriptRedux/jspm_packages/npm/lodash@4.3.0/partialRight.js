/* */ 
var createWrapper = require('./_createWrapper'),
    replaceHolders = require('./_replaceHolders'),
    rest = require('./rest');
var PARTIAL_RIGHT_FLAG = 64;
var partialRight = rest(function(func, partials) {
  var placeholder = partialRight.placeholder,
      holders = replaceHolders(partials, placeholder);
  return createWrapper(func, PARTIAL_RIGHT_FLAG, undefined, partials, holders);
});
partialRight.placeholder = {};
module.exports = partialRight;
