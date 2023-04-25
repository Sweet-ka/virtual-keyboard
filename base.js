export class Base {
  constructor(tag) {
    this.element = document.createElement(tag);
  }

  setClass(...classNames) {
    for (let className of classNames) {
      this.element.classList.add(className);
    }
  }

  render(parent) {
    parent.append(this.element);
  }
}
