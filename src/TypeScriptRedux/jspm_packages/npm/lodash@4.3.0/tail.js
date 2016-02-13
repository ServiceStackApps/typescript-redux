/* */ 
var drop = require('./drop');
function tail(array) {
  return drop(array, 1);
}
module.exports = tail;
