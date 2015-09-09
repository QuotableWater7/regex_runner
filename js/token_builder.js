var Token = require('./token');
var _ = require('underscore');

function tokenBuilder(regexp) {
  return {
    tokens: [],
    output: [],

    getTokens: function () {
      var self = this;

      _.each(regexp, function (char) {
        switch (char) {
        case '?':
          self.buildOptionalToken();
          break;
        default:
          self.output.push(char);
          break;
        }
      });

      this.buildTokensFromOutput();

      return this.tokens;
    },

    buildOptionalToken: function () {
      var self = this;

      var first_part = this.output.slice(0, -1);
      _.each(first_part, function (token) {
        self.tokens.push(new Token(token));
      });

      var last_part = this.output.slice(-1);
      self.tokens.push(new Token(last_part, { optional: true }));

      self.resetOutput();
    },

    buildTokensFromOutput: function () {
      var self = this;

      _.each(this.output, function (token) {
        self.tokens.push(new Token(token));
      });
    },

    resetOutput: function () {
      this.output = [];
    }
  };
};

module.exports = tokenBuilder;
