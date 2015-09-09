var edgeBuilder = require('./edge_builder');
var fsmsim = require('./fsmsim');
var Token = require('./token');
var _ = require('underscore');
var tokenBuilder = require('./token_builder');

var args = process.argv.slice(2);

var string_to_match = args[0];
var pattern = args[1];
var tokens = tokenBuilder(pattern);
var edges = edgeBuilder(tokens);
var accepting_states = [tokens.length + 1];

var output = fsmsim(string_to_match , 1, edges, accepting_states);
console.log(output);
