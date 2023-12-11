<script setup lang="ts">

</script>

<template>
    <nav class="navbar">
        <router-link to="/">Home</router-link>
        <div class="dropdown">
            <h4 class="dropdown-title">Curiosities <span class="dropdown-title-img">⬇️</span></h4>
            <ul class="dropdown-list" >
                <li class="dropdown-list-item">
                    <router-link to="/sorter-canvas">Sorter canvas</router-link>
                </li>
                <li class="dropdown-list-item">
                    <router-link to="/line-canvas">Line Canvas</router-link>
                </li>
                <li class="dropdown-list-item">
                    <router-link to="/pendulum">Pendulum</router-link>
                </li>
                <li class="dropdown-list-item">
                    <router-link to="/mouse-particles">Mouse Particles</router-link>
                </li>
                <li class="dropdown-list-item">
                    <router-link to="/flow-field">Flow Field</router-link>
                </li>
            </ul>
        </div>
        <router-link to="/pendulum">Pendulum</router-link>
        <router-link to="/">Curiosities</router-link>
    </nav>
</template>

<style>
    .navbar {
        position: absolute;
        z-index: 999;
        display: flex;
    }

    .dropdown-list {
        display: none;
    }

    .dropdown:hover .dropdown-list {
        display: block;
    }
</style>