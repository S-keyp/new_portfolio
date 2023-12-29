<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits(['searchWord'])
let searchWord = ref('')

</script>

<template>
    <input type="text" placeholder="City" v-model="searchWord">
    <button @click="emit('searchWord', searchWord)">Fetch forecast</button>
</template>