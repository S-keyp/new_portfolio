<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue';
// import MainCanvas from './components/canvas/MainCanvas.vue'
// import SorterCanvas from './components/canvas/SorterCanvas.vue'
// import MouseParticlesCanvas from './components/canvas/MouseParticlesCanvas.vue'
// import MeteoAPI from './components/canvas/MeteoAPI.vue'
// import LinesCanvas from './components/canvas/LinesCanvas.vue'
// import PendulumCanvas from './components/canvas/PendulumCanvas.vue'
</script>

<template>
  <div class="content">
    <TheNavbar />

    <router-view></router-view>
  </div>
  
  <!-- <MainCanvas /> -->
  <!-- <SorterCanvas /> -->
  <!-- <MouseParticlesCanvas /> -->
  <!-- <LinesCanvas /> -->
  <!-- <PendulumCanvas /> -->
  <!-- <MeteoAPI /> -->
</template>

<style scoped>


</style>
