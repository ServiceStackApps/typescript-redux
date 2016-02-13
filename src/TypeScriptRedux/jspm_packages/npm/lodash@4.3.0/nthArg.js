/* */ 
var toInteger = require('./toInteger');
function nthArg(n) {
  n = toInteger(n);
  return function() {
    return arguments[n];
  };
}
module.exports = nthArg;
