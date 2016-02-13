/* */ 
var Map = require('./_Map'),
    Set = require('./_Set'),
    WeakMap = require('./_WeakMap');
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';
var objectProto = Object.prototype;
var funcToString = Function.prototype.toString;
var objectToString = objectProto.toString;
var mapCtorString = Map ? funcToString.call(Map) : '',
    setCtorString = Set ? funcToString.call(Set) : '',
    weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';
function getTag(value) {
  return objectToString.call(value);
}
if ((Map && getTag(new Map) != mapTag) || (Set && getTag(new Set) != setTag) || (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : null,
        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';
    if (ctorString) {
      switch (ctorString) {
        case mapCtorString:
          return mapTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
module.exports = getTag;
