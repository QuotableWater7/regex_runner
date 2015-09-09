var Token = require('./token');
var _ = require('underscore');

function tokenBuilder(regexp) {
  return {
    tokens: [],

    output: '',

    getTokens: function () {
      _.each(regexp, function (char) {
        if (char === '?') {
          this.buildOptionalToken();
          return;
        }

        this.output += char;
      }.bind(this));

      this.buildTokensFromOutput();

      return this.tokens;
    },

    buildOptionalToken: function () {
      var first_part = this.output.slice(0, -1);
      var last_part = this.output.slice(-1);

      _.each(first_part, function (token) {
        this.tokens.push(new Token(token));
      }.bind(this));
      this.tokens.push(new Token(last_part, { optional: true }));
      this.output = '';
    },

    buildTokensFromOutput: function () {
      var self = this;

      _.each(this.output, function (token) {
        self.tokens.push(new Token(token));
      });
    }
  };
};

module.exports = tokenBuilder;
