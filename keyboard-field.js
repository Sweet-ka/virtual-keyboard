import { Base } from "./base.js";
import { CloneTxt } from "./clone-txt.js";
import { letter, setLetter } from "./keyboard-functions.js";
import { arr, gap, style_active_button } from "./keyboard.js";
import { Sound } from "./sound.js";
import { TextField } from "./text-field.js";

export class Keyboard extends Base {
  canvas_width = 1420;
  canvas_height = 500;
  canvas_x;
  canvas_y;
  ctx;
  delta_x_max = 12;
  delta_y_max = 12;
  inner = 0.5;
  r = 8;
  strokeStyle_button = "#7dfffd";
  fillStyle_button = "#265c6a96";
  fillStyle_text = "#7dfffd";
  shadowColor_button = "#121e29";
  shadowColor_active_button = "#7dfffd";
  animate_name;
  caps;
  shiftLeft = false;
  shiftRight = false;
  langauge = "en";

  constructor() {
    super("div");
    this.setClass("keyboard-wrap");

    this.monitor = new Base("div");
    this.monitor.setClass("monitor");
    this.monitor.render(this.element);

    this.txtField = new TextField(30, 10);
    this.txtField.element.id = "txt";
    this.txtField.render(this.monitor.element);
    this.txt = this.txtField.element;

    this.clone = new CloneTxt();
    this.clone.element.id = "out";
    this.clone.span.id = "sp";
    this.clone.render(this.monitor.element);

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

    if (localStorage.langauge) this.langauge = localStorage.langauge;
    if (localStorage.value) {
      this.txt.value = localStorage.value;
      this.txt.selectionStart = this.txt.selectionEnd = this.txt.value.length;
    }

    this.arr.forEach((item, index) => {
      item.x_shadow = this.set_delta_x(item.width, item.x);
      item.y_shadow = this.set_delta_y(item.height, item.y);

      this.setCurrentLetter(item);
      this.art(item, item.x_delta, item.y_delta);

      addEventListener("keydown", (event) => {
        if (event.code == item.code) {
          new Sound("./src/audio-key.wav");
          item.x_delta = item.x_shadow;
          item.y_delta = item.y_shadow;

          this.checkCaps(item, true, event);
          this.checkShift();
          this.checkProperty(item);
          this.animate_name(index, 1);
        }

        if (event.code !== "ArrowUp" && event.code !== "ArrowDown") this.firstPos = undefined;
        this.defaultMouse(event);

        if (event.code === "ShiftLeft") {
          this.shiftLeft = true;
        }
        if (event.code === "ShiftRight") {
          this.shiftRight = true;
        }

        this.changeLangauge(event, item);
      });

      addEventListener("keyup", (event) => {
        if (event.code === "ShiftLeft") {
          this.shiftLeft = false;
        }
        if (event.code === "ShiftRight") {
          this.shiftRight = false;
        }

        if (event.code == item.code) {
          this.checkCaps(item, false, event);
          this.checkShift();
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

  changeLangauge(event, item) {
    if (event.code == item.code && event.altKey && event.ctrlKey) {
      if (this.langauge === "en") {
        this.langauge = "rus";
      } else if (this.langauge === "rus") {
        this.langauge = "en";
      }
    }
    localStorage.langauge = this.langauge;
  }

  checkProperty(item) {
    if (item.hasOwnProperty("function") && item.function !== undefined) {
      item.function.call(this, this.txt, item.letter, item.code);
    } else {
      this.setCurrentLetter(item);
      letter(this.txt, item.newLetter);
    }
  }

  setCurrentLetter(item) {
    let currentLetterUp;
    let currentLetter;
    if (item.letter) {
      currentLetter = item.letter[this.langauge];
    }
    if (item.letterUp) {
      currentLetterUp = item.letterUp[this.langauge];
    }
    item.newLetter = setLetter.call(this, this.caps, this.shift, currentLetter, currentLetterUp);
  }

  checkCaps(item, active, e) {
    if (item.code !== "CapsLock") {
      item.active = active;
    } else if (e) {
      item.active = e.getModifierState("CapsLock");
      this.caps = item.active;
    }
  }

  checkShift() {
    this.shift = this.shiftLeft || this.shiftRight;
  }

  defaultMouse(e) {
    e.preventDefault();
  }

  setActive(item) {
    if (item.active === true) {
      item.active = false;
    } else if (item.active === false) {
      item.active = true;
    }
  }

  down(e) {
    addEventListener("mousemove", this.defaultMouse);
    let coord = this.get_coord(e);

    this.arr.forEach((item, index) => {
      if (
        coord.ex >= item.x &&
        coord.ex <= item.x + item.width &&
        coord.ey >= item.y &&
        coord.ey <= item.y + item.height
      ) {
        new Sound("./src/audio-key.wav");
        item.x_delta = item.x_shadow;
        item.y_delta = item.y_shadow;

        if (item.code !== "ArrowUp" && item.code !== "ArrowDown") this.firstPos = undefined;

        if (item.code === "CapsLock") {
          this.setActive(item);
          this.caps = item.active;
        }

        let callShiftLeftCtx = function () {
          this.shiftLeft = true;
          item.active = true;
        };
        let callShiftLeft = callShiftLeftCtx.bind(this);

        let callShiftRightCtx = function () {
          this.shiftRight = true;
          item.active = true;
        };
        let callShiftRight = callShiftRightCtx.bind(this);

        if (item.code === "ShiftLeft") {
          item.active = true;
          this.shift = true;
          if (this.shiftLeft === false) this.animate_name(index, 1);
          this.shiftLeft = false;
          if (!e.shiftKey) addEventListener("mousemove", callShiftLeft);
        } else if (item.code === "ShiftRight") {
          item.active = true;
          this.shift = true;
          if (this.shiftRight === false) this.animate_name(index, 1);
          this.shiftRight = false;
          if (!e.shiftKey) addEventListener("mousemove", callShiftRight);
        } else {
          this.checkCaps(item, true);
          if (item.active === true) this.animate_name(index, 1);
        }

        this.checkProperty(item);

        const animate_back = function () {
          this.checkShift();
          removeEventListener("mousemove", callShiftLeft);
          removeEventListener("mousemove", callShiftRight);
          removeEventListener("mouseup", this.animate_back_this);
          if (item.code === "ShiftLeft") {
            item.active = this.shiftLeft;
          } else if (item.code === "ShiftRight") {
            item.active = this.shiftRight;
          } else {
            this.checkCaps(item, false);
          }
          if (item.active === false) {
            this.animate_name(index, -1);
          }
        };

        this.animate_back_this = animate_back.bind(this);

        if (
          (item.code !== "CapsLock" && item.code !== "ShiftLeft" && item.code !== "ShiftRight") ||
          item.active === false
        ) {
          addEventListener("mouseup", this.animate_back_this);
        } else if (
          (item.code === "ShiftLeft" && this.shiftLeft === false) ||
          (item.code === "ShiftRight" && this.shiftRight === false)
        ) {
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
        this.setCurrentLetter(item);
        this.art(item, item.x_delta, item.y_delta);
      });

      if (timeFraction < 1) {
        requestAnimationFrame(anim_this);
      } else {
        cancelAnimationFrame(anim_this);
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
    if (el.active) {
      this.ctx.fillStyle = style_active_button;
      this.ctx.shadowColor = this.shadowColor_active_button;

      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.shadowOffsetX = el.x_shadow - x;
      this.ctx.shadowOffsetY = el.y_shadow - y;
      this.ctx.shadowBlur = "100";
      this.ctx.roundRect(el.x + x, el.y + y, el.width, el.height, [this.r]);
      this.ctx.fill();
      this.ctx.restore();
    } else {
      this.ctx.fillStyle = el.style;
    }
    this.ctx.beginPath();
    this.ctx.shadowOffsetX = el.x_shadow - x;
    this.ctx.shadowOffsetY = el.y_shadow - y;
    this.ctx.roundRect(el.x + x, el.y + y, el.width, el.height, [this.r]);
    this.ctx.fill();

    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    this.ctx.shadowBlur = "0";
    this.ctx.roundRect(
      el.x + x + gap * this.inner,
      el.y + y + gap * this.inner,
      el.width - 2 * gap * this.inner,
      el.height - 2 * gap * this.inner,
      [this.r * this.inner]
    );
    this.ctx.stroke();

    this.ctx.fillStyle = this.fillStyle_text;
    this.ctx.font = "36px sans-serif";
    this.ctx.textAlign = "center";
    if (!el.rotate) {
      this.ctx.shadowColor = this.shadowColor_active_button;
      this.ctx.fillText(el.newLetter, el.x + el.width / 2 + x, el.y + el.height / 2 + y + 10);
    } else {
      this.ctx.save();

      this.ctx.translate(el.x + x + el.width / 2, el.y + y + el.height / 2);
      this.ctx.rotate((el.rotate * Math.PI) / 180);
      this.ctx.translate(-(el.x + x + el.width / 2), -(el.y + y + el.height / 2));

      this.ctx.beginPath();
      this.ctx.moveTo(el.x + x + el.width / 2 - gap / 2, el.y + y + el.height / 2);
      this.ctx.lineTo(el.x + x + el.width / 2 + gap / 2, el.y + y + el.height / 2 + gap);
      this.ctx.lineTo(el.x + x + el.width / 2 + gap / 2, el.y + y + el.height / 2 - gap);

      this.ctx.fill();
      this.ctx.restore();
    }

    this.ctx.restore();
  }

  ctx_back_art() {
    this.ctx_back.fillStyle = this.shadowColor_button;
    this.ctx_back.beginPath();
    this.ctx_back.roundRect(0, 0, this.canvas_width, this.canvas_height, [this.r]);
    this.ctx_back.fill();

    this.ctx_back.beginPath();

    this.ctx_back.fillStyle = "#234a5a";
    this.ctx_back.roundRect(
      this.delta_x_max / 2,
      this.delta_y_max / 2,
      this.canvas_width - this.delta_x_max,
      this.canvas_height - this.delta_y_max * 2,
      [this.r]
    );
    this.ctx_back.fill();
  }

  get_coord(e) {
    this.canvas_x = this.canvas.element.getBoundingClientRect().x;
    this.canvas_y = this.canvas.element.getBoundingClientRect().y;
    return { ex: e.clientX - this.canvas_x, ey: e.clientY - this.canvas_y };
  }

  // infoSound() {
  //   this.audio = new Audio();
  //   this.audio.src = "./audio-key.wav";
  //   this.audio.play();

  //   let play = this.audio.play();
  //   if (play) {
  //     play.catch((e) => {}).then(() => {});
  //   }
  // }
}
