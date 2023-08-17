<script lang="ts">

    import FlowFieldEffect from './../classes/FlowFieldEffect.ts'

    export default {
        data(){
            return{
                count: 1
            }
        },
        methods: {
            
        },
        mounted() {
            const canvas = this.$refs.canvas
            const ctx = canvas.getContext("2d")

            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            let flow = new FlowFieldEffect(ctx, canvas.width, canvas.height)
            flow.animate()

            console.log(ctx)
            console.log(canvas)
        },
    }
</script>
<template>
    <canvas ref="canvas" id="canvas"></canvas>
</template>

<style scoped>
#canvas {
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
}
</style>