var _ = require('underscore');
var fsmsim = require('./fsmsim');
var Token = require('./token');

function edgeBuilder(tokens) {
  var edges = {};
  var edge_index = 1;

  _.each(tokens, function (token, index) {
    edges[edge_index] = {};

    if (token.isOptional()) {
      edges[edge_index].epsilon = edge_index + 1;
    }
    edges[edge_index][token.value()] = edge_index + 1;

    edge_index++;
  });

  return edges;
}

module.exports = edgeBuilder;
