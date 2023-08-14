const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

canvas.addEventListener('mousedown', (event) => {
  if (event.button === 0) {
    drawCircle(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop, 'blue');
  } else if (event.button === 2) {
    drawCircle(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop, 'red');
  }
});

function drawCircle(x, y, color) {
  context.beginPath();
  context.arc(x, y, 20, 0, 2 * Math.PI);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}
