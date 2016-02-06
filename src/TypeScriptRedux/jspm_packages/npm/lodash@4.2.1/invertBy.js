/* */ 
var baseIteratee = require('./_baseIteratee'),
    createInverter = require('./_createInverter');
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var invertBy = createInverter(function(result, value, key) {
  if (hasOwnProperty.call(result, value)) {
    result[value].push(key);
  } else {
    result[value] = [key];
  }
}, baseIteratee);
module.exports = invertBy;
