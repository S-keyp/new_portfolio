<script setup lang="ts">
import { onMounted } from 'vue';

const props = defineProps(['dropDown'])

onMounted(() => {
    console.log('LinkItem', props);
})
</script>

<template>
    <div class="dropdown">
        <h4 class="dropdown-title">{{ dropDown.title }}</h4>
        <ul class="dropdown-list">
            <li class="dropdown-list-item" v-for="elt in dropDown.subElements">
                <routerLink :to="elt.ref">{{ elt.title }}</routerLink>
            </li>
        </ul>
    </div>
</template>