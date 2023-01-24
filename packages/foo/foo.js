const bar = require("@slack/bar");
const { print } = require("../../src/util");

function foo() {
  print("foo");
  bar();
}

module.exports = foo;
