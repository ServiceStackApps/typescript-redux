/* */ 
var apply = require('./_apply'),
    mergeDefaults = require('./_mergeDefaults'),
    mergeWith = require('./mergeWith'),
    rest = require('./rest');
var defaultsDeep = rest(function(args) {
  args.push(undefined, mergeDefaults);
  return apply(mergeWith, undefined, args);
});
module.exports = defaultsDeep;
