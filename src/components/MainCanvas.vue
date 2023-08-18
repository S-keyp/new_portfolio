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
                this.flowField.resizeFlowEffect(window.innerWidth, window.innerHeight)
                this.flowField = new FlowFieldEffect(this.ctx, this.canvas.width, this.canvas.height) as FlowFieldEffect
                this.flowField.animate()            
            }
        },



        computed:{
            canvasWidth(){
                return this.flowField ? this.flowField.width : 100
            },
            canvasHeight(){
                return this.flowField ? this.flowField.height : 100
            },
        },


        
        mounted() {

            this.canvas = this.$refs.canvas
            this.ctx = this.canvas.getContext("2d")
            
            this.canvas.width = window.innerWidth
            this.canvas.height = window.innerHeight
            
            this.flowField = new FlowFieldEffect(this.ctx, this.canvas.width, this.canvas.height) as FlowFieldEffect
            this.flowField.animate()
            
            this.resizeCanvas()
            window.addEventListener('resize', this.resizeCanvas);
            
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