var _ = require('underscore');

function findAcceptingStatesFromIndex(edges, current_index) {
  var edges_at_index = edges[current_index];
  if (!edges_at_index) { return current_index; }

  var found_accepting_states = [];
  _.each(edges_at_index, function (next_index, key) {
    found_accepting_states.push(findAcceptingStatesFromIndex(edges, next_index));
  });

  return _.chain(found_accepting_states).flatten().uniq().value();
}

function findAcceptingStates(edges) {
  var found_accepting_states = [];

  return findAcceptingStatesFromIndex(edges, 1);
}

module.exports = findAcceptingStates;
