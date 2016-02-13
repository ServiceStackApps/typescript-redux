/* */ 
(function(Buffer) {
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var Ctor = buffer.constructor,
        result = new Ctor(buffer.length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer;
})(require('buffer').Buffer);
