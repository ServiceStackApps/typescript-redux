/* */ 
var isStrictComparable = require('./_isStrictComparable'),
    toPairs = require('./toPairs');
function getMatchData(object) {
  var result = toPairs(object),
      length = result.length;
  while (length--) {
    result[length][2] = isStrictComparable(result[length][1]);
  }
  return result;
}
module.exports = getMatchData;
