/* */ 
var cloneArrayBuffer = require('./_cloneArrayBuffer');
function cloneTypedArray(typedArray, isDeep) {
  var buffer = typedArray.buffer,
      Ctor = typedArray.constructor;
  return new Ctor(isDeep ? cloneArrayBuffer(buffer) : buffer, typedArray.byteOffset, typedArray.length);
}
module.exports = cloneTypedArray;
