/* */ 
var copyObjectWith = require('./_copyObjectWith'),
    createAssigner = require('./_createAssigner'),
    keysIn = require('./keysIn');
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObjectWith(source, keysIn(source), object, customizer);
});
module.exports = assignInWith;
