<script setup lang="ts">
import { ref } from 'vue';
import { useCounterStore } from './../stores/index'

const serverHello = ref({})
fetch("/api/v1/hello")
  .then((r) => r.json())
  .then(({ message }) => {
    serverHello.value = message
  })

const store = useCounterStore()

</script>

<template>
  <div class="test">

    <button @click="store.increment">Increment</button>
    {{ store.count }}
    {{ serverHello }}
  </div>
</template>

<style>
.test {
  background-color: white;
  color: #000;
}
</style>