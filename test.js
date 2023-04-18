import { arr } from "./keyboard.js";

class Keyboard {

  canvas_width = 1200
  canvas_height = 500
  delta_x_max = 5;
  delta_y_max = 5;
  inner = 0.1;
  r = 8;
  strokeStyle_button = "black"
  fillStyle_button = "gray"
  shadowColor_button = "black"

  constructor(){
    this.element = document.createElement("canvas")
    
    canvas.setAttribute("id", "can");
    const ctx = canvas.getContext("2d");

function set_delta_x(w, x){
  return ((this.canvas_width-w)/2-x)/this.canvas_width*this.delta_x_max
}

function set_delta_y(h, y){
  return (this.canvas_height-h-y)/this.canvas_height*this.delta_y_max
}

function art(el, x, y) {

  ctx.strokeStyle = this.strokeStyle_button;
  ctx.shadowColor = this.shadowColor_button;

  ctx.save();

  ctx.fillStyle = this.fillStyle_button;
  ctx.beginPath();
  ctx.shadowOffsetX = el.x_shadow - x;
  ctx.shadowOffsetY = el.y_shadow - y;
  ctx.roundRect(el.x + x, el.y + y, el.width, el.height, [r]);
  ctx.fill();

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.roundRect(
    el.x + x + el.width * this.inner,
    el.y + y + el.height * this.inner,
    el.width * (1 - this.inner * 2),
    el.height * (1 - this.inner * 2),
    [r]
  );
  ctx.stroke();

  ctx.restore();
}

this.arr.forEach((item, index) => {
  item.x_shadow = set_delta_x(item.width, item.x)
  item.y_shadow = set_delta_y(item.height, item.y)
  art(item, item.x_delta, item.y_delta);

  addEventListener('keydown',(event) => {
    if (event.code == item.code) {
      item.x_delta = item.x_shadow;
      item.y_delta = item.y_shadow;
      animate(index, 1);
    }
  });
  addEventListener('keyup',(event) => {
    if (event.code == item.code) {
      item.x_delta = item.x_shadow;
      item.y_delta = item.y_shadow;
      animate(index, -1);
    }
  });
});

const animate = function (i, delta) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
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

    ctx.clearRect(0, 0, 1200, 500);

    arr.forEach((item) => {
      art(item, item.x_delta, item.y_delta);
    });

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animate);
      if (delta === -1) removeEventListener("mouseup", animate_back);
    }
  });
};

const canvas_x = canvas.getBoundingClientRect().x;
const canvas_y = canvas.getBoundingClientRect().y;
let index;
let animate_back;

addEventListener("mousedown", (e) => {
  let coord = get_coord(e);
  this.arr.forEach((item, i) => {
    if (
      coord.ex >= item.x &&
      coord.ex <= item.x + item.width &&
      coord.ey >= item.y &&
      coord.ey <= item.y + item.height
    ) {
      item.x_delta = item.x_shadow;
      item.y_delta = item.y_shadow;
      index = i;
      animate(index, 1);

      animate_back = function () {
        animate(index, -1);
      };

      addEventListener("mouseup", animate_back);
    }
  });
});

function get_coord(e) {
  return { ex: e.clientX - canvas_x, ey: e.clientY - canvas_y };
}

}
}

const can = new Keyboard()
document.body.append(can.element)