<script lang="ts">
import SorterCanvas from './../classes/SorterCanvas.ts'


    export default {
        data(){
            return{
                canvas: null as HTMLCanvasElement || null,
                ctx: null as CanvasRenderingContext2D || null,
                arrayToSort: [] as Array<number> || null
            }
        },



        methods: {
            resizeCanvas(){
                
            },

            init(){
                for(let i = 0; i < 10; i++){
                    this.arrayToSort.push((Math.random() * 20).toFixed(3))
                }
            },
        },



        computed:{

            draw(x: number, y: number){
                // this.ctx.b
            }
        },


        
        mounted() {

            this.canvas = this.$refs.canvas1 as HTMLCanvasElement
            this.ctx = this.canvas.getContext("2d") as CanvasRenderingContext2D
            const CANVAS_WIDTH = 300
            const CANVAS_HEIGHT = 150
            
            const sorterCanvas = new SorterCanvas(this.canvas, this.ctx, CANVAS_WIDTH, CANVAS_HEIGHT)
            

            this.init()
            
            console.log(`${this.arrayToSort}`)
            
        },
    }
</script>
<template>
    <canvas ref="canvas1" id="canvas1"></canvas>
</template>

<style scoped>
#canvas1 {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
   
}
</style>