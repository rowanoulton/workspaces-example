import builtThing from "@slack/built-thing";
import rawThing from "@slack/raw-thing";
import { print } from "../../src/util";
import { thing } from "@slack/typed-thing";
import type { Baz } from "@slack/typed-thing";

function foo() {
  const b: Baz = thing;
  console.log(b.id, b.name);
  print("foo");
  builtThing();
  rawThing();
}

export default foo;
