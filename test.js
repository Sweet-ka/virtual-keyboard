const canvas = document.getElementById("can");
const ctx = canvas.getContext("2d");

let x_delta = 5;
let y_delta = 5;
let inner = 0.1;
let y_end;
let r = 8;
let shadowOffsetX = x_delta;
let shadowOffsetY = y_delta;

let arr = [
  {
    width: 100,
    height: 100,
    x: 10,
    y: 10,
    x_delta: 0,
    y_delta: 0,
  },
  {
    width: 100,
    height: 100,
    x: 120,
    y: 10,
    x_delta: 0,
    y_delta: 0,
  },
];

function art(el, x, y) {
  //ctx.clearRect(0, 0, 1200, 500);
  // ctx.fillStyle = "#0a4fbb";
  ctx.strokeStyle = "black";
  ctx.shadowColor = "black";

  // ctx.beginPath();
  // ctx.shadowOffsetY = 12;
  // ctx.roundRect(10, 10, 100, 100, [8]);
  // ctx.fill();
  // ctx.shadowOffsetX = 0;

  // ctx.shadowOffsetY = 0; //12 - (y1 - y0);

  // ctx.roundRect(10, 10, 100, 100, [8]);
  // ctx.roundRect(22, 18, 76, 76, [8]);
  // ctx.stroke();
  //let y1 = 20

  ctx.save();
  ctx.fillStyle = "gray";

  ctx.beginPath();
  ctx.shadowOffsetX = x_delta - x;
  ctx.shadowOffsetY = y_delta - y;
  ctx.roundRect(el.x + x, el.y + y, el.width, el.height, [r]);

  //   ctx.beginPath();
  //   ctx.shadowOffsetX = (y1 - y0) / 2;
  //   ctx.roundRect(110 + y1 / 2, y1, 100, 100, [8]);

  ctx.fill();

  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  ctx.roundRect(
    el.x + x + el.width * inner,
    el.y + y + el.height * inner,
    el.width * (1 - inner * 2),
    el.height * (1 - inner * 2),
    [r]
  );
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 0;

  // let x1, x2, x3, x4, u1, u2, u3, u4, xs, ys, xk, yk, wk, hk, dx, dy;

  // ys = shadowOffsetY;
  // xs = shadowOffsetY;

  // dx = r - (r * ys) / Math.sqrt(xs * xs + ys * ys);
  // dy = (r * xs) / Math.sqrt(xs * xs + ys * ys);
  // xk = el.x;
  // yk = el.y;
  // wk = el.width;
  // hk = el.height;
  // x1 = xk;
  // u1 = yk + hk - r;
  // x2 = x1 + r;
  // u2 = u1 + r;
  // x3 = x2 + xs;
  // u3 = u2 + ys;
  // x4 = x3 - r;
  // u4 = u3 - r;

  // ctx.moveTo(x1, u1);
  // ctx.arcTo(x1, u2, x2, u2, r);
  // //ctx.moveTo(x1 + dx, u1 + dy);
  // ctx.lineTo(x3, u3);
  // ctx.arcTo(x4, u3, x4, u4, r);
  // ctx.lineTo(x4 + dx, u4 + dy);
  // ctx.lineTo(x1 + dx, u1 + dy);
  // ctx.closePath();

  ctx.fill();
  //ctx.stroke();

  ctx.restore();
}

arr.forEach((item) => {
  art(item, item.x_delta, item.y_delta);
});

const animate = function (i, delta) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / 2;
    if (timeFraction > 1) timeFraction = 1;
    if (timeFraction < 0) timeFraction = 0;
    // вычисление текущего состояния анимации
    let progress_x, progress_y;
    if (delta === 1) {
      progress_x = x_delta * timeFraction;
      progress_y = y_delta * timeFraction;
    } else if (delta === -1) {
      progress_x = x_delta * (1 - timeFraction);
      progress_y = y_delta * (1 - timeFraction);
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
  arr.forEach((item, i) => {
    if (
      coord.ex >= item.x &&
      coord.ex <= item.x + item.width &&
      coord.ey >= item.y &&
      coord.ey <= item.y + item.height
    ) {
      item.x_delta = x_delta;
      item.y_delta = y_delta;
      index = i;
      animate(index, 1);

      animate_back = function () {
        animate(index, -1);
      };

      addEventListener("mouseup", animate_back);
    }
  });

  //}
});

function get_coord(e) {
  return { ex: e.clientX - canvas_x, ey: e.clientY - canvas_y };
}
