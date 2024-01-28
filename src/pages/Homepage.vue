<script setup lang="ts">
import { ref } from 'vue';

const serverHello = ref({})
fetch("/api/v1/hello")
  .then((r) => r.json())
  .then(({ message }) => {
    serverHello.value = message
  })
</script>

<template>
    {{ serverHello }}
</template>