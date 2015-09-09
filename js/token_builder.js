var Token = require('./token');
var _ = require('underscore');

function tokenBuilder(regexp) {
  var tokens = [];
  var output = '';

  _.each(regexp, function (char) {
    if (char === '?') {
      var first_part = output.slice(0, -1);
      var last_part = output.slice(-1);

      _.each(first_part, function (token) {
        tokens.push(new Token(token));
      });
      tokens.push(new Token(last_part, { optional: true }));
      output = '';
      return;
    }

    output += char;
  });

  _.each(output, function (token) {
    tokens.push(new Token(token));
  });

  return tokens;
};

module.exports = tokenBuilder;
