/* */ 
var nativeCreate = require('./_nativeCreate');
var objectProto = Object.prototype;
function Hash() {}
Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;
module.exports = Hash;
