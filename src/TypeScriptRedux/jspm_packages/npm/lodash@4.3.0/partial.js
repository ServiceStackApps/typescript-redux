/* */ 
var createWrapper = require('./_createWrapper'),
    replaceHolders = require('./_replaceHolders'),
    rest = require('./rest');
var PARTIAL_FLAG = 32;
var partial = rest(function(func, partials) {
  var placeholder = partial.placeholder,
      holders = replaceHolders(partials, placeholder);
  return createWrapper(func, PARTIAL_FLAG, undefined, partials, holders);
});
partial.placeholder = {};
module.exports = partial;
