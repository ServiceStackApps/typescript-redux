/* */ 
var getTag = require('./_getTag'),
    isObjectLike = require('./isObjectLike');
var mapTag = '[object Map]';
function isMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}
module.exports = isMap;
