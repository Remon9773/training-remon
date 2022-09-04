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
    let x = 50*3;
    let y = height/2;
    let x2 = width/2;
    let y2 = -20;
    let velX = 1;
    let velY = 1;
    let velY2 = 0;
    let rood1 = 255;
    let groen1 = 0;
    let blauw1 = 0;
    sketch.draw(({time, clear, fill, circle, rect, line, stroke, strokeWeight, text, textWeight, textMode}) => {
        clear();

        if (y > height){
            velY = 0;
            velY2 = 1;
        }


        y += velY;
        y2 += velY2;
        fill(rood1, groen1, blauw1);
        rect(x, y, 100, 30);

        fill(0, 255, 0);
        circle(x2, y2, 20);

    });
    // stop();
});
</script>