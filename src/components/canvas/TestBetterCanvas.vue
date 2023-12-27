<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import TestBetterCanvas from '../../classes/canvas/TestBetterCanvas';

    let testBetterCanvas = null as TestBetterCanvas | null;


    function resizeCanvas(){
        testBetterCanvas?.resizeCanvas(window.innerWidth, window.innerHeight)
    }

    let canvasWidth = computed(function(){
        return window.innerWidth
    })
    let canvasHeight = computed(function(){
        return window.innerHeight
    })


    onMounted(() => {
        testBetterCanvas = new TestBetterCanvas()

        window.addEventListener('resize', resizeCanvas)
        testBetterCanvas.canvas.addEventListener('mousemove', (e: MouseEvent) => {
            testBetterCanvas?.setMousePosition(e.clientX, e.clientY)
        })
        testBetterCanvas.canvas.addEventListener('click', (e: MouseEvent) => {
            testBetterCanvas?.clickMousePosition(e.clientX, e.clientY)
        })
    })

</script>

<template>
    <canvas id="testBetterCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
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