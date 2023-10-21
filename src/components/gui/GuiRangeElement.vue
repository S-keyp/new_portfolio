<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  bar?: number
}

const emit = defineEmits(["ElementEmit"])

const props = defineProps<Props>()

let guiElementName = ref('')
let guiElementValue = ref('')
let guiElement = ref({
    "name": guiElementName,
    "value": guiElementValue.value
})

</script>

<template>
    <div class="gui-element">
        <label :for="guiElementName">{{ guiElementName }}:</label>
        <input :name="guiElementName" type="range" min="0" max="30" step="1" v-model.lazy="guiElementValue">
        <span>{{ guiElementValue }}</span>
    </div>
</template>

<style scoped>
    
</style>