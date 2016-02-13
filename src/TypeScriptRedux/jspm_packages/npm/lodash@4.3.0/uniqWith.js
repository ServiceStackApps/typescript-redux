/* */ 
var baseUniq = require('./_baseUniq');
function uniqWith(array, comparator) {
  return (array && array.length) ? baseUniq(array, undefined, comparator) : [];
}
module.exports = uniqWith;
