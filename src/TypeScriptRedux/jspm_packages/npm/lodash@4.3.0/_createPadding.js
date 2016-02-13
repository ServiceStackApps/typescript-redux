/* */ 
var repeat = require('./repeat'),
    stringSize = require('./_stringSize'),
    stringToArray = require('./_stringToArray'),
    toInteger = require('./toInteger');
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';
var rsZWJ = '\\u200d';
var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
var nativeCeil = Math.ceil;
function createPadding(string, length, chars) {
  length = toInteger(length);
  var strLength = stringSize(string);
  if (!length || strLength >= length) {
    return '';
  }
  var padLength = length - strLength;
  chars = chars === undefined ? ' ' : (chars + '');
  var result = repeat(chars, nativeCeil(padLength / stringSize(chars)));
  return reHasComplexSymbol.test(chars) ? stringToArray(result).slice(0, padLength).join('') : result.slice(0, padLength);
}
module.exports = createPadding;
