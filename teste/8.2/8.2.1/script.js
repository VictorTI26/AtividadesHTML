const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => {
  drawing = true;
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
  context.beginPath();
});

canvas.addEventListener('mousemove', (event) => {
  if (!drawing) return;
  const x = event.clientX - canvas.offsetLeft;
  const y = event.clientY - canvas.offsetTop;
  drawCircle(x, y, 'black');
});

function drawCircle(x, y, color) {
  context.arc(x, y, 5, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
}
