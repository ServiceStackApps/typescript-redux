/* */ 
var addMapEntry = require('./_addMapEntry'),
    arrayReduce = require('./_arrayReduce'),
    mapToArray = require('./_mapToArray');
function cloneMap(map) {
  var Ctor = map.constructor;
  return arrayReduce(mapToArray(map), addMapEntry, new Ctor);
}
module.exports = cloneMap;
