<script setup lang="ts">
    import { onMounted } from 'vue';
    import CanvasThreejs from '../../classes/canvas/threejs/Test';

    let canvasThree = null as CanvasThreejs | null;


    // function resizeCanvas(){
    //     canvasThree?.resizeCanvas(window.innerWidth, window.innerHeight)
    // }

    // let canvasWidth = computed(function(){
    //     return window.innerWidth
    // })
    // let canvasHeight = computed(function(){
    //     return window.innerHeight
    // })


    onMounted(() => {
        canvasThree = new CanvasThreejs()
        console.log('canvasThree', canvasThree);

        // window.addEventListener('resize', resizeCanvas)
        // canvasThree.canvas.addEventListener('mousemove', (e: MouseEvent) => {
        //     canvasThree?.setMousePosition(e.clientX, e.clientY)
        // })
        // canvasThree.canvas.addEventListener('click', (e: MouseEvent) => {
        //     canvasThree?.clickMousePosition(e.clientX, e.clientY)
        // })
    })

</script>

<template>
     <div id="main">
        <!-- <div class="overlay"></div> -->
        <!-- :width="canvasWidth" :height="canvasHeight" -->
        <canvas id="c" ></canvas>
        <div id="labels"></div>
    </div>
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