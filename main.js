import { Base } from "./base.js";
import { Keyboard } from "./keyboard-field.js";

export class Main extends Base {
  constructor() {
    super("main");

    this.container = new Base("div");
    this.container.setClass("container");
    this.container.render(this.element);

    this.keyboard = new Keyboard();
    this.keyboard.render(this.container.element);
  }
}

export const main = new Main();
