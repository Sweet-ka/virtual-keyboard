import { Base } from "./base.js";

export class TextField extends Base {
  constructor(cols, rows) {
    super("textarea");
    if (cols) this.element.cols = cols;
    if (rows) this.element.rows = rows;
  }
}
