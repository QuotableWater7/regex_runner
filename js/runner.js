var edgeBuilder = require('./edge_builder');
var fsmsim = require('./fsmsim');
var Token = require('./token');
var _ = require('underscore');
var tokenBuilder = require('./token_builder');
var findAcceptingStates = require('./find_accepting_states');

var args = process.argv.slice(2);

var string_to_match = args[0];
var pattern = args[1];
var tokens = new tokenBuilder(pattern).getTokens();
var edges = edgeBuilder(tokens);
var accepting_states = findAcceptingStates(edges);

var output = fsmsim(string_to_match, 1, edges, accepting_states);
console.log(output);
