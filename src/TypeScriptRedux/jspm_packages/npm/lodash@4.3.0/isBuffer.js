/* */ 
(function(Buffer) {
  var constant = require('./constant'),
      root = require('./_root');
  var objectTypes = {
    'function': true,
    'object': true
  };
  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;
  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;
  var moduleExports = (freeModule && freeModule.exports === freeExports) ? freeExports : null;
  var Buffer = moduleExports ? root.Buffer : undefined;
  var isBuffer = !Buffer ? constant(false) : function(value) {
    return value instanceof Buffer;
  };
  module.exports = isBuffer;
})(require('buffer').Buffer);
