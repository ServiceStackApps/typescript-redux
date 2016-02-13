/* */ 
var apply = require('./_apply'),
    baseToPath = require('./_baseToPath'),
    isKey = require('./_isKey'),
    last = require('./last'),
    parent = require('./_parent');
function baseInvoke(object, path, args) {
  if (!isKey(path, object)) {
    path = baseToPath(path);
    object = parent(object, path);
    path = last(path);
  }
  var func = object == null ? object : object[path];
  return func == null ? undefined : apply(func, object, args);
}
module.exports = baseInvoke;
