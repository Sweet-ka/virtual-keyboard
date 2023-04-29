import { Base } from "./base.js";
import { Sound } from "./sound.js";

export class Header extends Base {
  constructor() {
    super("header");

    this.container = new Base("div");
    this.container.setClass("container");
    this.container.render(this.element);

    this.logo = new Base("div");
    this.logo.setClass("logo");
    this.logo.render(this.container.element);

    this.logo.element.innerHTML = "<h2 class='rss'>RS School</h2>";
    this.logo.element.innerHTML += "<h1 class='logo-name'>Virtual keyboard</h1>";

    this.info = new Base("div");
    this.info.setClass("info");
    this.info.render(this.logo.element);

    this.infoSysem = new Base("div");
    this.infoSysem.setClass("info-system");
    this.infoSysem.render(this.info.element);

    this.infoSysemText = new Base("div");
    this.infoSysemText.setClass("system-text");
    this.infoSysemText.render(this.infoSysem.element);
    this.infoSysemText.element.textContent = "Клавиатура создана в операционной системе Windows";

    this.infoLang = new Base("div");
    this.infoLang.setClass("info-lang");
    this.infoLang.render(this.info.element);

    this.infoLangText = new Base("div");
    this.infoLangText.setClass("lang-text");
    this.infoLangText.render(this.infoLang.element);
    this.infoLangText.element.textContent = "Для переключения языка использовать комбинацию ctrl + alt";

    this.infoSysem.element.addEventListener("mouseover", () => {
      new Sound("./src/facebookme.mp3");
    });
    this.infoLang.element.addEventListener("mouseover", () => {
      new Sound("./src/facebookme.mp3");
    });
  }
}
export const header = new Header();
