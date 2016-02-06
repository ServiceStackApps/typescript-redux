/* */ 
var pullAll = require('./pullAll'),
    rest = require('./rest');
var pull = rest(pullAll);
module.exports = pull;
