/* */ 
var Uint8Array = require('./_Uint8Array');
function cloneBuffer(buffer) {
  var Ctor = buffer.constructor,
      result = new Ctor(buffer.byteLength),
      view = new Uint8Array(result);
  view.set(new Uint8Array(buffer));
  return result;
}
module.exports = cloneBuffer;
