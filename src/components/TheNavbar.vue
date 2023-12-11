<script setup lang="ts">

</script>

<template>
    <nav class="navbar">
        <router-link to="/">Home</router-link>
        <router-link to="/pendulum">Pendulum</router-link>
        <router-link to="/">Curiosities</router-link>
    </nav>
</template>

<style scoped>
    .navbar {
        position: absolute;
        z-index: 999;
    }
</style>