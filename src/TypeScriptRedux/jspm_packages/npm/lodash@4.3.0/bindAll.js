/* */ 
var arrayEach = require('./_arrayEach'),
    baseFlatten = require('./_baseFlatten'),
    bind = require('./bind'),
    rest = require('./rest');
var bindAll = rest(function(object, methodNames) {
  arrayEach(baseFlatten(methodNames), function(key) {
    object[key] = bind(object[key], object);
  });
  return object;
});
module.exports = bindAll;
