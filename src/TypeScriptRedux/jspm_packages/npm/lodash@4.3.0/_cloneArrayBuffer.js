/* */ 
var Uint8Array = require('./_Uint8Array');
function cloneArrayBuffer(arrayBuffer) {
  var Ctor = arrayBuffer.constructor,
      result = new Ctor(arrayBuffer.byteLength),
      view = new Uint8Array(result);
  view.set(new Uint8Array(arrayBuffer));
  return result;
}
module.exports = cloneArrayBuffer;
