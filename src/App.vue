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
    // rect 1
    let x1 = 0;
    let y1 = 0;
    // rect 2
    let x2 = width-30;
    let y2 = 0;
    // rect 3
    let x3 = 0;
    let y3 = height-30;
    // rect 4
    let x4 = width-30;
    let y4 = height-30;
    sketch.draw(({time, clear, fill, circle, rect, line, stroke, strokeWeight, text, textWeight, textMode}) => {
        clear();
        // rect 1
        x1++;
        y1++;
        fill(255, 0, 0);
        if (x1 < width/2 - 15) rect(x1, y1, 30, 30);
        else circle(x1 + 15, y1 + 15, 15);
        
        // rect 2
        x2--;
        y2++;
        fill(0, 255, 0);
        if (x2 > width/2 - 15) rect(x2, y2, 30, 30);
        else circle(x2 + 15, y2 + 15, 15);
        
        
        // rect 3
        x3++;
        y3--;
        fill(0, 0, 255);
        rect(x3, y3, 30, 30);
        // rect 4
        x4--;
        y4--;
        fill(255, 255, 0);
        rect(x4, y4, 30, 30);

    });
    // stop();
});
</script>