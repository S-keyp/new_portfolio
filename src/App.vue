<script setup lang="ts">
// import MainCanvas from './components/canvas/MainCanvas.vue'
// import SorterCanvas from './components/canvas/SorterCanvas.vue'
// import MouseParticlesCanvas from './components/canvas/MouseParticlesCanvas.vue'
// import MeteoAPI from './components/canvas/MeteoAPI.vue'
// import LinesCanvas from './components/canvas/LinesCanvas.vue'
import PendulumCanvas from './components/canvas/PendulumCanvas.vue'
</script>

<template>
  <!-- <div>
    <h1>Yo wazzup world?</h1>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- <MainCanvas /> -->
  <!-- <SorterCanvas /> -->
  <!-- <MouseParticlesCanvas /> -->
  <!-- <LinesCanvas /> -->
  <PendulumCanvas />
  <!-- <MeteoAPI /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
