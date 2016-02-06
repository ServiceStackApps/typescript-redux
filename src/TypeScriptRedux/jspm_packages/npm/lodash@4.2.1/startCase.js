/* */ 
var capitalize = require('./capitalize'),
    createCompounder = require('./_createCompounder');
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + capitalize(word);
});
module.exports = startCase;
