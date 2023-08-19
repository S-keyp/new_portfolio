<script lang="ts">
import SorterCanvas from './../classes/SorterCanvas.ts'


    export default {
        data(){
            return{
                sorterCanvas: null as SorterCanvas || null,
                canvas: null as HTMLCanvasElement || null,
                ctx: null as CanvasRenderingContext2D || null,
                arrayToSort: [] as Array<number> || null
            }
        },



        methods: {
            resizeCanvas(){
                this.sorterCanvas.resizeCanvas(window.innerWidth, window.innerHeight)
                console.log('sorterCanvas: ',this.sorterCanvas.width, this.sorterCanvas.height)
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

            this.canvas = this.$refs.canvas1 as HTMLCanvasElement
            this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D
            const CANVAS_WIDTH = window.innerWidth // 700
            const CANVAS_HEIGHT = window.innerHeight // 500
            
            this.sorterCanvas = new SorterCanvas(this.canvas, this.ctx, CANVAS_WIDTH, CANVAS_HEIGHT)

            window.addEventListener('resize', this.resizeCanvas)
            
            
            
        },
    }
</script>
<template>
    <canvas ref="canvas1" id="canvas1" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
#canvas1 {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
}
</style>