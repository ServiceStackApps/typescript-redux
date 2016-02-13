/* */ 
var baseClone = require('./_baseClone'),
    baseMatches = require('./_baseMatches');
function matches(source) {
  return baseMatches(baseClone(source, true));
}
module.exports = matches;
