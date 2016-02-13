/* */ 
var apply = require('./_apply'),
    isObject = require('./isObject'),
    rest = require('./rest');
var attempt = rest(function(func, args) {
  try {
    return apply(func, undefined, args);
  } catch (e) {
    return isObject(e) ? e : new Error(e);
  }
});
module.exports = attempt;
