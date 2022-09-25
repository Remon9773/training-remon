<template>
    <canvas id="sketch1"></canvas>
</template>

<script setup>
import { onMounted } from 'vue';
import Sketch from './canvas/index.js';
if (import.meta.hot?.on('vite:beforeUpdate', () => {
    import.meta.hot.invalidate();  
}));


onMounted(() => {
    const sketch = Sketch('sketch1', {w: 400, h: 400, bg: 'black', center: true})
    const {stop, width, height, Vector, Vec} = sketch;
    
    const rectangle = (x, y, w, h, color) => {
        x = x;
        y = y;
        w = w;
        h = h;
        const c = {
            r: color.r,
            g: color.g,
            b: color.b,
        }
        return {
            x, y, w, h, color: c,
        };
    }
    const circle = (x, y, r, color) => {
        x = x;
        y = y;
        r = r;
        const c = {
            r: color.r,
            g: color.g,
            b: color.b,
        }
        return {
            x, y, r, color: c,
        };
    }
    const maxColor = 255;
    const minColor = 0;
    const l = 30;
    const color1 = {r: maxColor, g: minColor, b: minColor};
    const color2 = {r: minColor, g: maxColor, b: minColor};
    const color3 = {r: minColor, g: minColor, b: maxColor};
    const color4 = {r: maxColor, g: minColor, b: maxColor};
    const circ1 = circle(40, 40, 15, color1);
    const circ2 = circle(width-40, 40, 15, color2);
    const circ3 = circle(40, height-40, 15, color3);
    const circ4 = circle(width-40, height-40, 15, color4);

    const rect1 = rectangle(0, 0, l, l, color1);
    const rect2 = rectangle(width-l, 0, l, l, color2);
    const rect3 = rectangle(0, height-l, l, l, color3);
    const rect4 = rectangle(width-l, height-l, l, l, color4);


    sketch.draw(({time, clear, fill, circle, rect, line, stroke, strokeWeight, text, textWeight, textMode}) => {
        clear();

        fill(rect1.color.r, rect1.color.g, rect1.color.b);
        rect(rect1.x, rect1.y, rect1.w, rect1.h);
        fill(rect2.color.r, rect2.color.g, rect2.color.b);
        rect(rect2.x, rect2.y, rect2.w, rect2.h);
        fill(rect3.color.r, rect3.color.g, rect3.color.b);
        rect(rect3.x, rect3.y, rect3.w, rect3.h);
        fill(rect4.color.r, rect4.color.g, rect4.color.b);
        rect(rect4.x, rect4.y, rect4.w, rect4.h);

        fill(circ1.color.r, circ1.color.g, circ1.color.b);
        circle(circ1.x, circ1.y, circ1.r);
        fill(circ2.color.r, circ2.color.g, circ2.color.b);
        circle(circ2.x, circ2.y, circ2.r);
        fill(circ3.color.r, circ3.color.g, circ3.color.b);
        circle(circ3.x, circ3.y, circ3.r);
        fill(circ4.color.r, circ4.color.g, circ4.color.b);
        circle(circ4.x, circ4.y, circ4.r);
    });
    // stop();
});
</script>