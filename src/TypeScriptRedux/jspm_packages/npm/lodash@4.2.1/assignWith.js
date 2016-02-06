/* */ 
var copyObjectWith = require('./_copyObjectWith'),
    createAssigner = require('./_createAssigner'),
    keys = require('./keys');
var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObjectWith(source, keys(source), object, customizer);
});
module.exports = assignWith;
