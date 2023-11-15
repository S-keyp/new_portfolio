<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import PendulumCanvas from '../../classes/canvas/PendulumCanvas';

    let pendulumCanvas = null as PendulumCanvas | null;


    function resizeCanvas(){
        pendulumCanvas?.resizeCanvas(window.innerWidth, window.innerHeight)
    }

    let canvasWidth = computed(function(){
        return window.innerWidth
    })
    let canvasHeight = computed(function(){
        return window.innerHeight
    })


    onMounted(() => {
        pendulumCanvas = new PendulumCanvas()

        window.addEventListener('resize', resizeCanvas)
        pendulumCanvas.canvas.addEventListener('mousemove', (e: MouseEvent) => {
            pendulumCanvas?.setMousePosition(e.clientX, e.clientY)
        })
        pendulumCanvas.canvas.addEventListener('click', (e: MouseEvent) => {
            pendulumCanvas?.clickMousePosition(e.clientX, e.clientY)
        })
    })

</script>

<template>
    <canvas id="linesCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
#linesCanvas {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    z-index: 1;
}
</style>