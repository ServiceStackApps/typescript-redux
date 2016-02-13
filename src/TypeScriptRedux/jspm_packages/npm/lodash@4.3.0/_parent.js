/* */ 
var baseSlice = require('./_baseSlice'),
    get = require('./get');
function parent(object, path) {
  return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
}
module.exports = parent;
