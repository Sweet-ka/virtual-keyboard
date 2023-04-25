import { Base } from "./base.js";
import { Keyboard } from "./keyboard-field.js";

export class Main extends Base {
  constructor() {
    super("main");

    this.keyboard = new Keyboard();
    this.keyboard.render(this.element);
  }
}

export const main = new Main();
