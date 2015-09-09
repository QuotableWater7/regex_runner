var edgeBuilder = require('./edge_builder');
var fsmsim = require('./fsmsim');
var Token = require('./token');
var _ = require('underscore');
var tokenBuilder = require('./token_builder');

// var tokens = [
//   new Token('a'),
//   new Token('c')
// ];
// var edges = {
//   '1a': 2,
//   '2b': 3
// };
// var accepting_states = [3];
// console.log(fsmsim(tokens, 1, edges, accepting_states));

var pattern = 'ab?c';
var tokens = tokenBuilder(pattern);
var edges = edgeBuilder(tokens);
var output = fsmsim('abcd', 1, edges, [4]);

console.log(output);


// FSMSIM tests
// var edges = {
//   '1a': 2,
//   '1b': 3,
//   '2c': 4,
//   '3c': 4
// };
// var accepting_states = [4];
// var test_strings = ['ac', 'bc', 'whatever'];

// _.each(test_strings, function (test_string) {
//   console.log(fsmsim(test_string, 1, edges, accepting_states));
// });
