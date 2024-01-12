<script lang="ts">
import SorterCanvas from '../../classes/canvas/SorterCanvas.ts'

export default {
    data(){
        return{
            sorterCanvas: null as SorterCanvas | null,
        }
    },



    methods: {
        resizeCanvas(){
            this.sorterCanvas?.resizeCanvas(window.innerWidth, window.innerHeight)
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
       
        this.sorterCanvas = new SorterCanvas() as SorterCanvas

        window.addEventListener('resize', this.resizeCanvas)
        
    },
}
</script>
<template>
    <canvas ref="canvas1" id="sorterCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<style scoped>
#sorterCanvas {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
}
</style>