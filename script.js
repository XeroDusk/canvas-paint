const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;
canvas.style.border = "solid black 2px";




const mouse = 0;
function mousedown(e) {
    if (e.button === mouse) {
        shouldDraw = true;
        let walls = e.target.getBoundingClientRect();
        ctx.beginPath();  
        ctx.moveTo(e.clientX - walls.left, e.clientY - walls.top);
    }
}
function mouseup(e) {
    if (e.button === mouse) {
        shouldDraw = false;
    }
}
function mousemove(e) {
    if (shouldDraw) {
        let walls = e.target.getBoundingClientRect();
        ctx.lineTo(e.clientX-walls.left, e.clientY-walls.top);
        ctx.stroke();
    }
}
canvas.addEventListener('mousedown', mousedown); 
canvas.addEventListener('mouseup', mouseup);
canvas.addEventListener('mousemove', mousemove);

const tip = document.querySelector('#tip');
ctx.lineWidth = tip.value;
tip.addEventListener("change", () => ctx.lineWidth = tip.value);

const color = document.querySelector("#color");
ctx.strokeStyle = color.value
color.addEventListener("change", ()=> ctx.strokeStyle = color.value);

const clear = document.getElementById("clear");
clear.addEventListener("click", ()=> ctx.clearRect(0,0,canvas.width,canvas.height));