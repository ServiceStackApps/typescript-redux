/* */ 
var Symbol = require('./_Symbol'),
    Uint8Array = require('./_Uint8Array'),
    mapToArray = require('./_mapToArray'),
    setToArray = require('./_setToArray');
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]';
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = Symbol ? symbolProto.valueOf : undefined;
function equalByTag(object, other, tag, equalFunc, customizer, bitmask) {
  switch (tag) {
    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
      return +object == +other;
    case errorTag:
      return object.name == other.name && object.message == other.message;
    case numberTag:
      return (object != +object) ? other != +other : object == +other;
    case regexpTag:
    case stringTag:
      return object == (other + '');
    case mapTag:
      var convert = mapToArray;
    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
      convert || (convert = setToArray);
      return (isPartial || object.size == other.size) && equalFunc(convert(object), convert(other), customizer, bitmask | UNORDERED_COMPARE_FLAG);
    case symbolTag:
      return !!Symbol && (symbolValueOf.call(object) == symbolValueOf.call(other));
  }
  return false;
}
module.exports = equalByTag;
