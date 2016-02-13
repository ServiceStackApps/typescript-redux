/* */ 
var apply = require('./_apply'),
    arrayMap = require('./_arrayMap'),
    baseFlatten = require('./_baseFlatten'),
    baseIteratee = require('./_baseIteratee'),
    rest = require('./rest');
var nativeMin = Math.min;
var overArgs = rest(function(func, transforms) {
  transforms = arrayMap(baseFlatten(transforms), baseIteratee);
  var funcsLength = transforms.length;
  return rest(function(args) {
    var index = -1,
        length = nativeMin(args.length, funcsLength);
    while (++index < length) {
      args[index] = transforms[index].call(this, args[index]);
    }
    return apply(func, this, args);
  });
});
module.exports = overArgs;
