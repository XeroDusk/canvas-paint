const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;
canvas.style.border = "solid black 2px";



const mouse = 0;
function mousedown(e) {
    if (e.button === mouse) {
      shouldDraw = true;    
      ctx.beginPath();    
      ctx.moveTo(e.clientX , e.clientY );
    }
}
function mouseup(e) {
    if (e.button === mouse) {
      shouldDraw = false;
    }
}
function mousemove(e) {
    if (shouldDraw) {

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
    }
}
canvas.addEventListener('mousedown', mousedown); 
canvas.addEventListener('mouseup', mouseup);
canvas.addEventListener('mousemove', mousemove);