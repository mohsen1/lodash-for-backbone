var _ = {
  keys: require('lodash/object/keys'),
  result: require('lodash/object/result'),
  extend: require('lodash/object/assign'),
  defaults: require('lodash/object/defaults'),
  has: require('lodash/object/has'),
  pick: require('lodash/object/pick'),
  once: require('lodash/function/once'),
  uniqueId: require('lodash/utility/uniqueId'),
  invoke: require('lodash/collection/invoke'),
  each: require('lodash/internal/arrayEach'),
  map: require('lodash/internal/arrayMap'),
  any: require('lodash/internal/arraySome'),
  escape: require('lodash/string/escape'),
  isEmpty: require('lodash/lang/isEmpty'),
  isObject: require('lodash/lang/isObject'),
  isArray: require('lodash/lang/isArray'),
  isString: require('lodash/lang/isString'),
  isFunction: require('lodash/lang/isFunction'),
  isRegExp: require('lodash/lang/isRegExp')
};

_.bind = (function() {
  var createPartialWrapper = require('lodash/internal/createPartialWrapper');
  return function(func, thisArg, arg) {
    return createPartialWrapper(func, 33, thisArg, arg ? [arg] : []);
  }
}());

_.bindAll = function(object) {
  var length = arguments.length;
  while (length--) {
    var key = arguments[length];
    object[key] = _.bind(object[key], object);
  }
  return object;
};

_.clone = function(object) {
  if (!_.isObject(object)) {
    return object;
  }
  return _.isArray(object) ? object.slice() : _.extend({}, object);
};


module.exports = _;