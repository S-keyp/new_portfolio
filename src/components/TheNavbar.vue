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
    }
]

for (let item of menu){
    console.log('item', item);
}
</script>

<template>
    <nav class="navbar">
        <template v-for="item of menu">
            <Dropdown v-if="item.hasOwnProperty('subElements')" :drop-down="item" />
            <router-link v-else :to="item.ref!">{{ item.title }}</router-link>
        </template>
        <!-- <Dropdown :drop-down="{
        title: 'Curiosities',
        subElements: [
            {
               title: 'Sorter Canvas',
               ref:'/sorter-canvas' 
            },   
            {
               title: 'Line Canvas',
               ref:'/line-canvas' 
            },   
            {
               title: 'Pendulum',
               ref:'/pendulum' 
            },   
            {
               title: 'Mouse Particle',
               ref:'/mouse-particle' 
            },   
            {
               title: 'Flow Field',
               ref:'/flow-field'  
            },   
            {
               title: 'Canvas 3D',
               ref:'/canvas-3d'  
            },   
            {
               title: 'Test',
               ref:'/test'  
            },   
        ]
    }" /> -->
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