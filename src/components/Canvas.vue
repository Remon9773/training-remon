<template>
  <canvas id="canvas" style="background-color: black;" />
</template>

<script setup>
import { onMounted } from 'vue';
import Index from './index.js';

const getCtx = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  canvas.style.position = 'absolute';
  return context;
}

let xRect = 0;

onMounted(() => {
  const ctx = getCtx();
  Index(ctx);

  // ctx.clearRect(0, 0, innerWidth, innerHeight);

  // ctx.strokeStyle = 'white';
  // ctx.fillStyle ='red';
  // ctx.lineWidth = 2;
  // ctx.rect(xRect, 10, 30, 30);
  // ctx.fill();
  // ctx.stroke();
})
</script>
