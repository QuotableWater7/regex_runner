var tester = require('./regex_tester');

var args = process.argv.slice(2);
var string_to_match = args[0];
var pattern = args[1];

console.log(tester(string_to_match, pattern));
