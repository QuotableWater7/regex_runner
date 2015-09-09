var _ = require('underscore');

function contains(my_string, other_string) {
  return other_string.indexOf(my_string) !== -1;
}

module.exports = function (token, opts) {
  opts = opts || {};

  return {
    isOptional: function () {
      return opts.optional === true;
    },

    value: function () {
      return token;
    },

    isMatch: function (char) {
      return false;
    }
  };
};
