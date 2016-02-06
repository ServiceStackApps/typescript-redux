/* */ 
(function(process) {
  var identity = require('./identity');
  function toFunction(value) {
    return typeof value == 'function' ? value : identity;
  }
  module.exports = toFunction;
})(require('process'));
