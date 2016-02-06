/* */ 
var composeArgs = require('./_composeArgs'),
    composeArgsRight = require('./_composeArgsRight'),
    copyArray = require('./_copyArray'),
    replaceHolders = require('./_replaceHolders');
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_BOUND_FLAG = 4,
    CURRY_FLAG = 8,
    ARY_FLAG = 128,
    REARG_FLAG = 256;
var PLACEHOLDER = '__lodash_placeholder__';
var nativeMin = Math.min;
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (BIND_FLAG | BIND_KEY_FLAG | ARY_FLAG);
  var isCombo = (srcBitmask == ARY_FLAG && (bitmask == CURRY_FLAG)) || (srcBitmask == ARY_FLAG && (bitmask == REARG_FLAG) && (data[7].length <= source[8])) || (srcBitmask == (ARY_FLAG | REARG_FLAG) && (source[7].length <= source[8]) && (bitmask == CURRY_FLAG));
  if (!(isCommon || isCombo)) {
    return data;
  }
  if (srcBitmask & BIND_FLAG) {
    data[2] = source[2];
    newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
  }
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : copyArray(value);
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : copyArray(source[4]);
  }
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : copyArray(value);
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : copyArray(source[6]);
  }
  value = source[7];
  if (value) {
    data[7] = copyArray(value);
  }
  if (srcBitmask & ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  if (data[9] == null) {
    data[9] = source[9];
  }
  data[0] = source[0];
  data[1] = newBitmask;
  return data;
}
module.exports = mergeData;
