import builtThing from "@slack/built-thing";
import rawThing from "@slack/raw-thing";
import { print } from "../../src/util";

function foo() {
  print("foo");
  builtThing();
  rawThing();
}

export default foo;
