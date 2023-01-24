import bar from "@slack/bar";
import { print } from "../../src/util";

export default function foo() {
  print("foo");
  bar();
}
