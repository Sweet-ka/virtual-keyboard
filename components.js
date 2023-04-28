import { header } from "./header.js";
import { main } from "./main.js";

class Components {
  components = [];
  constructor(...components) {
    for (let component of components) {
      this.components.push(component);
    }
  }

  initComponents() {
    this.components.forEach((item) => {
      document.body.append(item.element);
    });
  }
}

export const components = new Components(header, main);
