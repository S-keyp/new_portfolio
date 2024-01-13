<script setup lang="ts">
import LinkItem from '../interface/LinkItem';
import Dropdown from './gui/Dropdown.vue';

interface Entry {
    title: string,
    ref?: string,
    subElements?: Array<LinkItem>
}

const menu: Array<Entry> = [
    {
        title: "Home",
        ref: "/"
    },
    {
        title: "Curiosities",
        subElements: [
            {
               title: "Sorter Canvas",
               ref:"/sorter-canvas" 
            },   
            {
               title: "Line Canvas",
               ref:"/line-canvas" 
            },   
            {
               title: "Pendulum",
               ref:"/pendulum" 
            },   
            {
               title: "Mouse Particle",
               ref:"/mouse-particles" 
            },   
            {
               title: "Flow Field",
               ref:"/flow-field"  
            },   
            {
               title: "Canvas 3D",
               ref:"/canvas-3d"  
            },   
            {
               title: "Test",
               ref:"/test"  
            },   
        ]
    },
    {
        title: "Meteo API",
        ref: "/meteo"
    },
]
</script>

<template>
    <nav class="navbar">
        <template v-for="item of menu">
            <Dropdown class="navbar-item" v-if="item.hasOwnProperty('subElements')" :drop-down="item" />
            <router-link class="navbar-item" v-else :to="item.ref!">{{ item.title }}</router-link>
        </template>
    </nav>
</template>

<style>
    .navbar {
        position: fixed;
        top: 12px;
        right: 10%;
        display: flex;
        z-index: 999;
    }

    .navbar-item {
        padding: 12px;
        list-style: none;
    }

    a.navbar-item {
        text-decoration: none;
    }
</style>