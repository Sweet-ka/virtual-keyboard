import { Base } from "./base.js";

export class CloneTxt extends Base {
  constructor() {
    super("div");
    this.span = new Base("span");
    this.span.render(this.element);
  }
}
