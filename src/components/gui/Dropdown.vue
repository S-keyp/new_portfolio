<script setup lang="ts">
defineProps(['dropDown'])
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

<style scoped>
.dropdown{
    position: relative;
}

.dropdown-list {
    display: none;
    list-style: none;
}

.dropdown:hover .dropdown-list {
    display: block;
    position: absolute;
}

.dropdown-list-item {
    width: max-content;
    text-decoration: none;
    padding: 6px 12px;
}

.dropdown-list-item a {
    text-decoration: none;
}
</style>