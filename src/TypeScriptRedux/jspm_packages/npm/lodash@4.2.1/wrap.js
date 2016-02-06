/* */ 
var identity = require('./identity'),
    partial = require('./partial');
function wrap(value, wrapper) {
  wrapper = wrapper == null ? identity : wrapper;
  return partial(wrapper, value);
}
module.exports = wrap;
