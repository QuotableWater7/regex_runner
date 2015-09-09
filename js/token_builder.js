var Token = require('./token');
var _ = require('underscore');

function tokenBuilder(regexp) {
  return {
    tokens: [],
    output: '',

    build: function () {
      _.each(regexp, function (char) {
        if (char === '?') {
          var first_part = this.output.slice(0, -1);
          var last_part = this.output.slice(-1);

          _.each(first_part, function (token) {
            this.tokens.push(new Token(token));
          }.bind(this));
          this.tokens.push(new Token(last_part, { optional: true }));
          this.output = '';
          return;
        }

        this.output += char;
      }.bind(this));

      _.each(this.output, function (token) {
        this.tokens.push(new Token(token));
      }.bind(this));

      return this.tokens;
    }
  };
};

module.exports = tokenBuilder;
