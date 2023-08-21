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
            cancelAnimationFrame(this.flowField.animationId)
            this.canvas.width = window.innerWidth
            this.canvas.height = window.innerHeight
            this.flowField = new FlowFieldEffect(this.canvas, this.ctx,  this.canvas.width,  this.canvas.height) as FlowFieldEffect
            // this.flowField.resizeCanvas(window.innerWidth, window.innerHeight)   
        },
    },



    computed:{
        canvasWidth(){
            console.log(window.innerWidth)
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
    <h1>S-keyp</h1>
    <h2>Portfolio</h2>
    <canvas ref="canvas" id="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
h1, h2{
    transform: translateY(-120%);
    margin: 0;
}

#canvas {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    width: 100vw;
    max-height: 80vh;
    z-index: -1;
}
</style>