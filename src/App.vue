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
    const sketch = Sketch('sketch1', {w: 400, h: 400, bg: 'lightgray', center: true})
    const {stop, width, height, Vector, Vec} = sketch;
    let x = 0;
    let y = height-30;
    let velX = 2;
    let velY = 2;
    sketch.draw(({time, clear, fill, circle, rect, line, stroke, strokeWeight, text, textWeight, textMode}) => {
        clear();
        if (x > width-100) velX = 0;
        if (y < 0 ) velY = 0;
        x += velX;
        y -= velY;
        rect(x, y, 100, 30);

    });
    // stop();
});
</script>