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
    const rect1 = rectangle(0, 0, 30, 30, {r: 255, g: 0, b: 0});
    const rect2 = rectangle(width-30, 0, 30, 30, {r: 0, g: 255, b: 0});
    const rect3 = rectangle(0, height-30, 30, 30, {r: 0, g: 0, b: 255});
    const rect4 = rectangle(width-30, height-30, 30, 30, {r: 255, g: 0, b: 255});


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
    });
    // stop();
});
</script>