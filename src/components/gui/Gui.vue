<script setup lang="ts">
import { computed, ref, watch } from 'vue';

let lineDeltaAlphaValue = ref(15)
let shapeEdgeCount = ref(7)
let shapeRadius = ref(15)

const emit = defineEmits(["lda", "sec", "sr"])

const ldaEmits = (lineDeltaAlphaValue: number) => {
    emit("lda", lineDeltaAlphaValue)
}

function logState(){
    console.log('linedelta', lineDeltaAlphaValue);
    console.log('shapeEdgeCount', shapeEdgeCount);
    console.log('shapeRadius', shapeRadius);
}

let a = computed(function(){
    console.log('lineDelta', lineDeltaAlphaValue);
    console.log('lineDeltaAlphaValue.value', lineDeltaAlphaValue.value);
    ldaEmits(lineDeltaAlphaValue.value)
    return lineDeltaAlphaValue.value / 10
})
let b = computed(function(){
    logState()
    return shapeEdgeCount.value
})
let c = computed(function(){
    logState()
    return shapeRadius.value
})


</script>

<template>
    <div class="gui-container">
        <!-- for alpha -->
        <div class="gui-group">
            <div class="gui-element">
                <label for="line-delta-alpha">Line alpha:</label>
                <input name="line-delta-alpha" type="range" min="0" max="30" step="1" v-model.lazy="lineDeltaAlphaValue">
                <span>{{ a }}</span>
            </div>
        </div>
        <div class="gui-group">
            <div class="gui-element">
                <label for="shape-edge-count">Shape edge count:</label>
                <input name="shape-edge-count" type="range" min="0" max="15" step="1" v-model.lazy="shapeEdgeCount">
                <span>{{ shapeEdgeCount }}</span>
            </div>
            <div class="gui-element">
                <label for="shape-radius">Max shape radius:</label>
                <input name="shape-radius" type="range" min="0" max="30" step="1" v-model.lazy="shapeRadius">
                <span>{{ shapeRadius }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.gui-container{
    display: flex;
    position: absolute;
    width: fit-content;
    height: fit-content;
    background: linear-gradient(0.125turn, #5171b1, #1170a0, #5171b1);
    color: #f9fafd;
    font-weight: 400;
    border-radius: 12px;
    z-index: 10;
}

.gui-group{
    padding: 12px;
}
.gui-element{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
}
.gui-element input{
    margin-left: 10px;
}
</style>