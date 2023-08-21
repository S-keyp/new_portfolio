<script lang="ts">
import FlowFieldEffect from './../classes/FlowFieldEffect.ts'

export default {
    data(){
        return{
            flowField: null as FlowFieldEffect || null,
            canvas: null as HTMLCanvasElement || null,
            ctx: null as CanvasRenderingContext2D || null,
        }
    },



    methods: {
        resizeCanvas(){
            this.flowField.resizeCanvas(window.innerWidth, window.innerHeight)      
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

        this.canvas = this.$refs.canvas as HTMLCanvasElement
        this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D
        const CANVAS_WIDTH = window.innerWidth // 700
        const CANVAS_HEIGHT = window.innerHeight // 500
        
        
        this.flowField = new FlowFieldEffect(this.canvas, this.ctx, CANVAS_WIDTH, CANVAS_HEIGHT) as FlowFieldEffect
        
        
        window.addEventListener('resize', this.resizeCanvas)    
        this.canvas.addEventListener('mousemove', (e: MouseEvent) => {
            this.flowField.setMousePosition(e.clientX, e.clientY)
        })   
        
    },
}
</script>
<template>
    <canvas ref="canvas" id="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
#canvas {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
   
}
</style>