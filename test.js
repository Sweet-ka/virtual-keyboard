const canvas = document.getElementById("can");
const ctx = canvas.getContext("2d");

let canvas_width = 1200
let canvas_height = 500
let delta_x_max = 5;
let delta_y_max = 5;
let inner = 0.1;
let y_end;
let r = 8;

let strokeStyle_button = "black"
let fillStyle_button = "gray"
let shadowColor_button = "black"

function set_delta_x(w, x){
  return ((canvas_width-w)/2-x)/canvas_width*delta_x_max
}

function set_delta_y(h, y){
  return (canvas_height-h-y)/canvas_height*delta_y_max
}

let arr = [
  {
    width: 100,
    height: 100,
    x: 10,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyZ"
  },
  {
    width: 100,
    height: 100,
    x: 1000,
    y: 10,
    x_shadow: 0,
    y_shadow: 0,
    x_delta: 0,
    y_delta: 0,
    code: "KeyX"
  },
];


function art(el, x, y) {

  ctx.strokeStyle = strokeStyle_button;
  ctx.shadowColor = shadowColor_button;

  ctx.save();

  ctx.fillStyle = fillStyle_button;
  ctx.beginPath();
  ctx.shadowOffsetX = el.x_shadow - x;
  ctx.shadowOffsetY = el.y_shadow - y;
  ctx.roundRect(el.x + x, el.y + y, el.width, el.height, [r]);
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

  ctx.restore();
}

arr.forEach((item, index) => {
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
  arr.forEach((item, i) => {
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
