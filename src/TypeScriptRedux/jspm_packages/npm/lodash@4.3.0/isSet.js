/* */ 
var getTag = require('./_getTag'),
    isObjectLike = require('./isObjectLike');
var setTag = '[object Set]';
function isSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}
module.exports = isSet;
