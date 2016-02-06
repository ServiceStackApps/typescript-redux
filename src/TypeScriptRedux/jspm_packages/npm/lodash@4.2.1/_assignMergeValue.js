/* */ 
var eq = require('./eq');
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) || (typeof key == 'number' && value === undefined && !(key in object))) {
    object[key] = value;
  }
}
module.exports = assignMergeValue;
