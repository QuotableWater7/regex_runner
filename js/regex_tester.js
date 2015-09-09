var edgeBuilder = require('./edge_builder');
var fsmsim = require('./fsmsim');
var tokenBuilder = require('./token_builder');
var findAcceptingStates = require('./find_accepting_states');


module.exports = function (string_to_match, pattern) {
  var tokens = new tokenBuilder(pattern).getTokens();
  var edges = edgeBuilder(tokens);
  var accepting_states = findAcceptingStates(edges);

  return fsmsim(string_to_match, 1, edges, accepting_states);
};
