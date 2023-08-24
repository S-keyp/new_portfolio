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
            this.mouseParticleCanvas.resizeCanvas(window.innerWidth, window.innerHeight)
            // this.mouseParticleCanvas.animate(1000/60)
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
        this.mouseParticleCanvas.canvas.addEventListener('click', (e: MouseEvent) => {
            this.mouseParticleCanvas.setMousePosition(e.clientX, e.clientY)
        })
        
    },
}
</script>
<template>
    <canvas id="mouseParticleCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
#mouseParticleCanvas {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
}
</style>