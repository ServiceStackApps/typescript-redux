/* */ 
var createAggregator = require('./_createAggregator');
var keyBy = createAggregator(function(result, value, key) {
  result[key] = value;
});
module.exports = keyBy;
