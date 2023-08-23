<script lang="ts">
import MouseParticleCanvas from './../classes/canvas/MouseParticlesCanvas.ts'

export default {
    data(){
        return{
            mouseParticleCanvas: null as MouseParticleCanvas || null,
        }
    },



    methods: {
        resizeCanvas(){
            cancelAnimationFrame(this.mouseParticleCanvas.animationId)
            this.mouseParticleCanvas = new MouseParticleCanvas() as MouseParticleCanvas
        },
    },



    computed:{
        canvasWidth(){
            return window.innerWidth
        },
        canvasHeight(){
            return window.innerHeight
        }
    },


    
    mounted() {
       
        this.mouseParticleCanvas = new MouseParticleCanvas()

        window.addEventListener('resize', this.resizeCanvas)
        
    },
}
</script>
<template>
    <canvas ref="canvas1" id="mouseParticleCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
#sorterCanvas {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
}
</style>