/* */ 
var copyObject = require('./_copyObject'),
    createAssigner = require('./_createAssigner'),
    keys = require('./keys');
var assign = createAssigner(function(object, source) {
  copyObject(source, keys(source), object);
});
module.exports = assign;
