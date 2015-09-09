var _ = require('underscore');

function fsmsim(string, current_node, edges, accepting_states) {
  var edges_at_current = edges[current_node] || {};

  var next_node = edges_at_current[string[0]];
  var epsilon_node = edges_at_current.epsilon;

  if (!epsilon_node) {
    if (_.isEmpty(string)) {
      return _.contains(accepting_states, current_node);
    } else if (!next_node) {
      return false;
    }
  }

  var epsilon_path_result = false;
  if (epsilon_node) {
    epsilon_path_result = fsmsim(string, epsilon_node, edges, accepting_states);
  }
  var regular_path_result = fsmsim(_.rest(string), next_node, edges, accepting_states);

  return regular_path_result || epsilon_path_result;
}

module.exports = fsmsim;
