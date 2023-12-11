<script lang="ts">
import FlowFieldEffect from '../../classes/canvas/FlowFieldEffect.ts'
// import FlowFieldEffect from '../../classes/canvas/FlowFieldEffect_save_V1.ts'

export default {
    data(){
        return{
            flowField: null as FlowFieldEffect | null,
        }
    },



    methods: {
        resizeCanvas(){
            this.flowField?.resizeCanvas(window.innerWidth, window.innerHeight)
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
        this.flowField = new FlowFieldEffect() as FlowFieldEffect
        window.addEventListener('resize', this.resizeCanvas)
        
        
        // Move mouse event listener in abstractCanvas?    
        this.flowField.canvas.addEventListener('mousemove', (e: MouseEvent) => {
            this.flowField?.setMousePosition(e.clientX, e.clientY)
        })   
    },
}
</script>

<template>
    <canvas ref="canvas" id="flowFieldEffect" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
h1, h2{
    transform: translateY(-120%);
    margin: 0;
}

#flowFieldEffect {
    position: absolute;
    top: 0;
    left: 0;
    background: #333;
    /* width: 100vw; */
    /* max-height: 80vh; */
    /* z-index: -1; */
}
</style>