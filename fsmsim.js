var _ = require('underscore');

function fsmsim(string, current_node, edges, accepting_states) {
  if (_.isEmpty(string)) { return _.contains(accepting_states, current_node); }

  var char = string[0];
  var rest_of_string = _.rest(string);
  var next_node = edges[current_node + char];
  var epsilon_node = edges[current_node + 'epsilon'];

  if (!(next_node || epsilon_node)) { return false; }

  var epsilon_path_result = false;
  if (epsilon_node) {
    epsilon_path_result = fsmsim(string, epsilon_node, edges, accepting_states);
  }
  var regular_path_result = fsmsim(rest_of_string, next_node, edges, accepting_states);

  return regular_path_result || epsilon_path_result;
}

module.exports = fsmsim;
