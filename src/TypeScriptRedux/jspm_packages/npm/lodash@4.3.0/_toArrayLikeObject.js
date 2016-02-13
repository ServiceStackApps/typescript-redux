/* */ 
(function(process) {
  var isArrayLikeObject = require('./isArrayLikeObject');
  function toArrayLikeObject(value) {
    return isArrayLikeObject(value) ? value : [];
  }
  module.exports = toArrayLikeObject;
})(require('process'));
