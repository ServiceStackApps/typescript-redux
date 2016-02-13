/* */ 
var checkGlobal = require('./_checkGlobal');
var objectTypes = {
  'function': true,
  'object': true
};
var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;
var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;
var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);
var freeSelf = checkGlobal(objectTypes[typeof self] && self);
var freeWindow = checkGlobal(objectTypes[typeof window] && window);
var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
module.exports = root;
