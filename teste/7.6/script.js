const canvas = document.getElementById('myCanvas');
const colorPicker = document.getElementById('colorPicker');
const context = canvas.getContext('2d');
let currentColor = colorPicker.value;

colorPicker.addEventListener('input', (event) => {
  currentColor = event.target.value;
});

canvas.addEventListener('mousedown', (event) => {
  if (event.button === 0) {
    context.fillStyle = currentColor;
    const x = event.clientX - canvas.offsetLeft;
    const y = event.clientY - canvas.offsetTop;
    drawCircle(x, y);
  }
});

function drawCircle(x, y) {
  context.beginPath();
  context.arc(x, y, 10, 0, 2 * Math.PI);
  context.fill();
  context.closePath();
}
