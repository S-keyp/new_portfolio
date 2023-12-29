<script lang="ts">


export default {
    props: {
        windangle: Number
    },
    data(){
        return{

        }
    },

}
</script>
<template>  
    <svg class="test" :style="{'transform': 'rotate(' + windangle + 'deg)'} " width="40" height="19" viewBox="0 0 40 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 9.5L25 0.839746V18.1603L40 9.5ZM0 11H26.5V8H0V11Z" fill="black"/>
    </svg>
</template>
 
<style scoped>
.test{
    width: 24px;
    height: 10px;
}
</style>