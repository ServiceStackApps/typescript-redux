/* */ 
var baseInvoke = require('./_baseInvoke'),
    rest = require('./rest');
var methodOf = rest(function(object, args) {
  return function(path) {
    return baseInvoke(object, path, args);
  };
});
module.exports = methodOf;
