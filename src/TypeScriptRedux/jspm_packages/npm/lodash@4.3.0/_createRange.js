/* */ 
var baseRange = require('./_baseRange'),
    isIterateeCall = require('./_isIterateeCall'),
    toNumber = require('./toNumber');
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    start = toNumber(start);
    start = start === start ? start : 0;
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toNumber(end) || 0;
    }
    step = step === undefined ? (start < end ? 1 : -1) : (toNumber(step) || 0);
    return baseRange(start, end, step, fromRight);
  };
}
module.exports = createRange;
