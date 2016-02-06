/* */ 
var cloneBuffer = require('./_cloneBuffer');
function cloneTypedArray(typedArray, isDeep) {
  var buffer = typedArray.buffer,
      Ctor = typedArray.constructor;
  return new Ctor(isDeep ? cloneBuffer(buffer) : buffer, typedArray.byteOffset, typedArray.length);
}
module.exports = cloneTypedArray;
