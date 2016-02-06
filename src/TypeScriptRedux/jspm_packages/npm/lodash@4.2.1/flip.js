/* */ 
var createWrapper = require('./_createWrapper');
var FLIP_FLAG = 512;
function flip(func) {
  return createWrapper(func, FLIP_FLAG);
}
module.exports = flip;
