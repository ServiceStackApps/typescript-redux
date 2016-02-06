/* */ 
(function(process) {
  var Symbol = require('./_Symbol'),
      isSymbol = require('./isSymbol');
  var INFINITY = 1 / 0;
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolToString = Symbol ? symbolProto.toString : undefined;
  function toString(value) {
    if (typeof value == 'string') {
      return value;
    }
    if (value == null) {
      return '';
    }
    if (isSymbol(value)) {
      return Symbol ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }
  module.exports = toString;
})(require('process'));
