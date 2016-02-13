/* */ 
var sum = require('./sum');
function mean(array) {
  return sum(array) / (array ? array.length : 0);
}
module.exports = mean;
