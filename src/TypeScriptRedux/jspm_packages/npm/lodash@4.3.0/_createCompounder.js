/* */ 
var arrayReduce = require('./_arrayReduce'),
    deburr = require('./deburr'),
    words = require('./words');
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string)), callback, '');
  };
}
module.exports = createCompounder;
