const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.height = 700;
canvas.width = 700;
canvas.style.border = "solid black 2px";

var info = document.getElementById("info");
function tellPos(p){
    info.innerHTML = "x: " + p.pageX + " y: " + p.pageY; 
}

function getPos(p){
    return [p.pageX, p.pageY];
}



function dot(p){
    let x = p.pageX; let y = p.pageY;
    ctx.beginPath();
    ctx.arc(x,y,5,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

function draw(p){
    let x = p.pageX; let y= p.pagey;
    addEventListener('mouseup', ()=> {ctx.moveTo(x,y);ctx.lineTo(p.pageX,p.pageY);ctx.stroke();}, false);
}

addEventListener('mousemove', tellPos, false);
addEventListener('mousedown', dot, false);

addEventListener('mousedown', draw, false);