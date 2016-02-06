/* */ 
var Set = require('./_Set'),
    noop = require('./noop');
var createSet = !(Set && new Set([1, 2]).size === 2) ? noop : function(values) {
  return new Set(values);
};
module.exports = createSet;
