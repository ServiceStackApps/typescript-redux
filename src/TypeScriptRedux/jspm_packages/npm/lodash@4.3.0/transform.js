/* */ 
var arrayEach = require('./_arrayEach'),
    baseCreate = require('./_baseCreate'),
    baseForOwn = require('./_baseForOwn'),
    baseIteratee = require('./_baseIteratee'),
    isArray = require('./isArray'),
    isFunction = require('./isFunction'),
    isObject = require('./isObject'),
    isTypedArray = require('./isTypedArray');
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object) || isTypedArray(object);
  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    if (isArr || isObject(object)) {
      var Ctor = object.constructor;
      if (isArr) {
        accumulator = isArray(object) ? new Ctor : [];
      } else {
        accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
      }
    } else {
      accumulator = {};
    }
  }
  (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}
module.exports = transform;
