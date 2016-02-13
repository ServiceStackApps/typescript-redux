/* */ 
(function(process) {
  var rest = require('./rest'),
      unzip = require('./unzip');
  var zip = rest(unzip);
  module.exports = zip;
})(require('process'));
