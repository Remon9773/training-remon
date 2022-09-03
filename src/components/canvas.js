let canvas, ctx;

export const size = {
    width: 300,
    height: 150,
}
// export let width = 300;
// export let height = 150;
export const setCanvas = () => {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    canvas.style.position = 'absolute';
    size.width = innerWidth;
    size.height = innerHeight;
    // ctx.beginPath();
    // ctx.fillRect(0, 0, width, height);
}
export const background = color => {
    ctx.fillStyle = `rgb(${color},${color},${color})`;
    ctx.fillRect(0, 0, size.width, size.height);
}
export const circle = (x, y, r) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
}
export const rect = (x, y, w, h) => {
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.fill();
}
export const fill = (...color) => {
    if (color.length === 1) ctx.fillStyle = `rgb(${color[0]},${color[0]},${color[0]})`;
    if (color.length === 3) ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
}
