const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const colorArray = palette;

setWidth();

function setWidth() {
  canvas.width = window.innerWidth - 10;
  canvas.height = window.innerHeight - 10;
}

window.addEventListener('resize', setWidth);

class Circle {
  constructor(x, y, dx, dy, radius, fillStyle, strokeStyle) {
    this.x = x;
    this.dx = dx;
    this.dy = dy;
    this.y = y;
    this.radius = radius;
    // this.fillColor = fillStyle;
    this.strokeStyle = strokeStyle;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  update() {
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

const array = [];

for (let index = 0; index < 200; index++) {
  const radius = 40;
  let dx = (Math.random() - 0.5) * 6;
  let dy = (Math.random() - 0.5) * 6;
  let x = Math.floor(Math.random() * (innerWidth - radius * 2) + radius);
  let y = Math.floor(Math.random() * (innerHeight - radius * 2) + radius);
  let fillColor = palette[Math.floor(Math.random() * colorArray.length)];
  let strokeStyle = palette[Math.floor(Math.random() * colorArray.length)];

  array.push(new Circle(x, y, dx, dy, radius, fillColor, strokeStyle));
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let index = 0; index < array.length; index++) {
    array[index].update();
  }
}

animate();
