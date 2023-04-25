import { Base } from "./base.js";
import { CloneTxt } from "./clone-txt.js";
import { letter } from "./keyboard-functions.js";
import { arr, gap, style_active_button } from "./keyboard.js";
import { TextField } from "./text-field.js";

export class Keyboard extends Base {
  canvas_width = 1420;
  canvas_height = 500;
  canvas_x;
  canvas_y;
  ctx;
  delta_x_max = 10;
  delta_y_max = 10;
  inner = 0.1;
  r = 8;
  strokeStyle_button = "black";
  fillStyle_button = "gray";
  fillStyle_text = "white";
  shadowColor_button = "black";
  animate_name;
  caps;

  constructor() {
    super("div");

    this.txtField = new TextField(30, 10);
    this.txtField.element.id = "txt";
    this.txtField.render(this.element);
    this.txt = this.txtField.element;

    this.clone = new CloneTxt();
    this.clone.element.id = "out";
    this.clone.span.id = "sp";
    this.clone.render(this.element);

    this.canvas = new Base("canvas");
    this.canvas.render(this.element);

    this.canvas.element.setAttribute("width", this.canvas_width);
    this.canvas.element.setAttribute("height", this.canvas_height);
    this.canvas.element.setAttribute("id", "can");
    this.ctx = this.canvas.element.getContext("2d");
    this.arr = arr;
    this.animate_name = this.animate.bind(this);

    this.firstPos = undefined;

    this.canvas.element.offscreenCanvas = document.createElement("canvas");
    this.canvas.element.offscreenCanvas.width = this.canvas_width;
    this.canvas.element.offscreenCanvas.height = this.canvas_height;

    this.ctx_back = this.canvas.element.getContext("2d");
    this.ctx_back_art();

    this.arr.forEach((item, index) => {
      item.x_shadow = this.set_delta_x(item.width, item.x);
      item.y_shadow = this.set_delta_y(item.height, item.y);
      this.art(item, item.x_delta, item.y_delta);

      addEventListener("keydown", (event) => {
        if (event.code !== "ArrowUp" && event.code !== "ArrowDown") this.firstPos = undefined;
        this.defaultMouse(event);
        if (event.code == item.code) {
          item.x_delta = item.x_shadow;
          item.y_delta = item.y_shadow;

          this.checkCaps(item, true, event);
          this.animate_name(index, 1);
          this.checkProperty(item);
        }
      });
      addEventListener("keyup", (event) => {
        if (event.code == item.code) {
          this.checkCaps(item, false, event);

          item.x_delta = item.x_shadow;
          item.y_delta = item.y_shadow;
          this.animate_name(index, -1);
        }
      });
    });

    addEventListener("mousedown", (e) => {
      this.down(e);
    });

    this.txt.addEventListener("mousemove", () => {
      removeEventListener("mousemove", this.defaultMouse);
    });
  }

  checkProperty(item) {
    if (item.hasOwnProperty("function") && item.function !== undefined) {
      item.function.call(this, this.txt, item.letter, item.code);
    } else {
      letter.call(this, this.caps, this.txt, item.letter);
    }
  }

  checkCaps(item, active, e) {
    if (item.code !== "CapsLock") {
      item.active = active;
    } else if (e) {
      item.active = e.getModifierState("CapsLock");
      this.caps = item.active;
    }
  }

  defaultMouse(e) {
    e.preventDefault();
  }

  down(e) {
    if (e.code !== "ArrowUp" && e.code !== "ArrowDown") this.firstPos = undefined;
    addEventListener("mousemove", this.defaultMouse);

    let coord = this.get_coord(e);

    this.arr.forEach((item, index) => {
      if (
        coord.ex >= item.x &&
        coord.ex <= item.x + item.width &&
        coord.ey >= item.y &&
        coord.ey <= item.y + item.height
      ) {
        item.x_delta = item.x_shadow;
        item.y_delta = item.y_shadow;

        if (item.code === "CapsLock") {
          if (item.active === true) {
            item.active = false;
          } else if (item.active === false) {
            item.active = true;
          }
          this.caps = item.active;
        }
        this.checkCaps(item, true);

        if (item.active === true) this.animate_name(index, 1);

        this.checkProperty(item);

        const animate_back = function () {
          this.checkCaps(item, false);
          this.animate_name(index, -1);
        };
        this.animate_back_this = animate_back.bind(this);

        if (item.code !== "CapsLock" || item.active === false) {
          addEventListener("mouseup", this.animate_back_this);
        }
      }
    });
  }

  animate(i, delta) {
    let start = performance.now();
    let anim_this = anim.bind(this);

    function anim(time) {
      let timeFraction = (time - start) / 2;
      if (timeFraction > 1) timeFraction = 1;
      if (timeFraction < 0) timeFraction = 0;

      let progress_x, progress_y;

      if (delta === 1) {
        progress_x = arr[i].x_shadow * timeFraction;
        progress_y = arr[i].y_shadow * timeFraction;
      } else if (delta === -1) {
        progress_x = arr[i].x_shadow * (1 - timeFraction);
        progress_y = arr[i].y_shadow * (1 - timeFraction);
      }

      arr[i].x_delta = progress_x;
      arr[i].y_delta = progress_y;
      this.ctx.clearRect(0, 0, this.canvas_width, this.canvas_height);
      this.ctx_back_art();

      arr.forEach((item) => {
        this.art(item, item.x_delta, item.y_delta);
      });

      if (timeFraction < 1) {
        requestAnimationFrame(anim_this);
      } else {
        cancelAnimationFrame(anim_this);
        if (delta === -1) removeEventListener("mouseup", this.animate_back_this);
      }
    }

    requestAnimationFrame(anim_this);
  }

  set_delta_x(w, x) {
    return (((this.canvas_width - w) / 2 - x) / this.canvas_width) * this.delta_x_max;
  }

  set_delta_y(h, y) {
    return ((this.canvas_height - h - y / 2) / this.canvas_height) * this.delta_y_max;
  }

  art(el, x, y) {
    this.txt.focus();

    this.ctx.strokeStyle = this.strokeStyle_button;
    this.ctx.shadowColor = this.shadowColor_button;

    this.ctx.save();
    el.active ? (this.ctx.fillStyle = style_active_button) : (this.ctx.fillStyle = el.style);
    //this.ctx.shadowBlur = "5";
    this.ctx.beginPath();
    this.ctx.shadowOffsetX = el.x_shadow - x;
    this.ctx.shadowOffsetY = el.y_shadow - y;

    this.ctx.roundRect(el.x + x, el.y + y, el.width, el.height, [this.r]);
    this.ctx.fill();

    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = "0";
    this.ctx.roundRect(el.x + x + gap, el.y + y + gap, el.width - 2 * gap, el.height - 2 * gap, [this.r]);
    this.ctx.stroke();

    this.ctx.fillStyle = this.fillStyle_text;
    this.ctx.font = "30px sans-sherif";
    this.ctx.textAlign = "center";
    this.ctx.fillText(el.letter, el.x + el.width / 2 + x, el.y + el.height / 2 + y + 10);

    this.ctx.restore();
  }

  ctx_back_art() {
    this.ctx_back.fillStyle = "orange";
    this.ctx_back.fillRect(0, 0, this.canvas_width, this.canvas_height);
  }

  get_coord(e) {
    this.canvas_x = this.canvas.element.getBoundingClientRect().x;
    this.canvas_y = this.canvas.element.getBoundingClientRect().y;
    return { ex: e.clientX - this.canvas_x, ey: e.clientY - this.canvas_y };
  }
}
