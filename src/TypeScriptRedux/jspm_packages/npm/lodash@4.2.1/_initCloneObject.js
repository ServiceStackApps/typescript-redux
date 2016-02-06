/* */ 
var baseCreate = require('./_baseCreate'),
    isFunction = require('./isFunction'),
    isPrototype = require('./_isPrototype');
function initCloneObject(object) {
  if (isPrototype(object)) {
    return {};
  }
  var Ctor = object.constructor;
  return baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
}
module.exports = initCloneObject;
