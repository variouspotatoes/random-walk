let x;
let y;
let iter = 100;
let lineID;
let ctx = null;
function init() {
    ctx = $('canvas')[0].getContext('2d');
    let width = $(window).width();
    let height = $(window).height();
    x = Math.floor(width / 2);
    y = Math.floor(height / 2);
    $("canvas").width(width);
    $("canvas").height(height);
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    lineID = window.requestAnimationFrame(draw);
}

function draw(iter) {
    if (iter == 0) {
        window.cancelAnimationFrame(lineID);
    } else {
        ctx.beginPath();
        ctx.moveTo(x, y);
        x += Math.random() * (13 + 13) - 13;
        y += Math.random() * (13 + 13) - 13;
        ctx.lineWidth = 1;
        ctx.lineTo(x, y);
        ctx.stroke();
        iter -= 1;

        lineID = window.requestAnimationFrame(draw);
    }
    
}

const canvas = document.getElementById('canvas');
init();