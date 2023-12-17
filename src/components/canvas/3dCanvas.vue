<script setup lang="ts">
    import { computed, onMounted } from 'vue';
    import Canvas3d from '../../classes/canvas/Canvas3d';

    let canvas3d = null as Canvas3d | null;


    function resizeCanvas(){
        canvas3d?.resizeCanvas(window.innerWidth, window.innerHeight)
    }

    let canvasWidth = computed(function(){
        return window.innerWidth
    })
    let canvasHeight = computed(function(){
        return window.innerHeight
    })


    onMounted(() => {
        canvas3d = new Canvas3d()

        window.addEventListener('resize', resizeCanvas)
        canvas3d.canvas.addEventListener('mousemove', (e: MouseEvent) => {
            canvas3d?.setMousePosition(e.clientX, e.clientY)
        })
        canvas3d.canvas.addEventListener('click', (e: MouseEvent) => {
            canvas3d?.clickMousePosition(e.clientX, e.clientY)
        })
    })

</script>

<template>
    <canvas id="canvas3d" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
#canvas3d {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    z-index: 1;
}
</style>