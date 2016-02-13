/* */ 
var sampleSize = require('./sampleSize');
var MAX_ARRAY_LENGTH = 4294967295;
function shuffle(collection) {
  return sampleSize(collection, MAX_ARRAY_LENGTH);
}
module.exports = shuffle;
