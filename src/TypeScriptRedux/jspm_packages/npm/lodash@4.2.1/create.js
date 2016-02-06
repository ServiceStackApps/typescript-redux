/* */ 
var baseAssign = require('./_baseAssign'),
    baseCreate = require('./_baseCreate');
function create(prototype, properties) {
  var result = baseCreate(prototype);
  return properties ? baseAssign(result, properties) : result;
}
module.exports = create;
