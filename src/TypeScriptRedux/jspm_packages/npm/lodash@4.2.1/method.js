/* */ 
var baseInvoke = require('./_baseInvoke'),
    rest = require('./rest');
var method = rest(function(path, args) {
  return function(object) {
    return baseInvoke(object, path, args);
  };
});
module.exports = method;
