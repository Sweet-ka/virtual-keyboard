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

    document.addEventListener("keydown", () => {
      this.audio = new Audio();
      this.audio.src = "./audio-key.wav";

      this.audio.play();
    });
  }
}

export const main = new Main();
