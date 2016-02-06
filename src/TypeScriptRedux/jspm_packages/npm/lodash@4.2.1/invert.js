/* */ 
var constant = require('./constant'),
    createInverter = require('./_createInverter'),
    identity = require('./identity');
var invert = createInverter(function(result, value, key) {
  result[value] = key;
}, constant(identity));
module.exports = invert;
