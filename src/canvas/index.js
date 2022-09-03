export default (id, {w = 300, h = 150, bg = 'lightgray', center = false}) => {
    const canvas = document.getElementById(id);
    ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    canvas.style.position = 'absolute';
    canvas.style.backgroundColor = bg;

    ctx.font = '16px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    if (center) {
        canvas.style.left = (((innerWidth - canvas.width) / 2)|0) + 'px';
        canvas.style.top = (((innerHeight - canvas.height) / 2)|0) + 'px';
    }
    const Vec = {
        add: (v1, v2) => {
            v1.x += v2.x;
            v1.y += v2.y;
        }
    }
    return {
        width: canvas.width,
        height: canvas.height,
        draw: script => {
            drawScript = script;
            loop(0);
        },
        stop: () => cancelAnimationFrame(requestID),
        Vector: (x, y) => ({x, y}),
        Vec,
    }
}
let ctx;

const clear = () => ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
const circle = (x, y, r) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
}
const rect = (x, y, w, h) => {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fill();
}
const fill = (...color) => {
    if (color.length === 1) {
        if (typeof color[0] === 'string') ctx.fillStyle = color[0];
        else if (typeof color[0] === 'number') ctx.fillStyle = `rgb(${color[0]},${color[0]},${color[0]})`;
    }
    if (color.length === 3) ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
}
const line = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
const stroke = (...color) => {
    if (color.length === 1) {
        if (typeof color[0] === 'string') ctx.strokeStyle = color[0];
        else if (typeof color[0] === 'number') ctx.strokeStyle = `rgb(${color[0]},${color[0]},${color[0]})`;
    }
    if (color.length === 3) ctx.strokeStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
}
const strokeWeight = weight => {
    ctx.lineWidth = weight;
}
const text = (txt, x, y) => {
    ctx.beginPath();
    ctx.fillText(txt, x, y);
}
const textWeight = weight => {
    ctx.font = `${weight}px sans-serif`;
}
const textMode = mode => {
    if (mode === 'middle') {
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
    }
}

let requestID;
let drawScript;
const loop = (time) => {
    drawScript({time, clear, fill, circle, rect, line, stroke, strokeWeight, text, textWeight, textMode});
    requestID = requestAnimationFrame(loop);
}