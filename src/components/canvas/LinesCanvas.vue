<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import LinesCanvas from '../../classes/canvas/LinesCanvas';
    import Gui from './../gui/Gui.vue';

    let linesCanvas = null as LinesCanvas | null;


    function resizeCanvas(){
        linesCanvas?.resizeCanvas(window.innerWidth, window.innerHeight)
    }

    function logLda(lda: number){
        console.log('lda: ', lda);
    }

    let canvasWidth = computed(function(){
        return window.innerWidth
    })
    let canvasHeight = computed(function(){
        return window.innerHeight
    })


    onMounted(() => {
        linesCanvas = new LinesCanvas()

        window.addEventListener('resize', resizeCanvas)
        linesCanvas.canvas.addEventListener('mousemove', (e: MouseEvent) => {
            linesCanvas?.setMousePosition(e.clientX, e.clientY)
        })
        linesCanvas.canvas.addEventListener('click', (e: MouseEvent) => {
            linesCanvas?.clickMousePosition(e.clientX, e.clientY)
        })
    })

</script>

<template>
    <Gui @lda="logLda"></Gui>
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