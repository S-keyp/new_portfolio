<script lang="ts">
import weatherService from './../services/weatherService.ts'

export default {
    data(){
        return {
            weather: null,
        }
    },
    methods: {
        async fetchWeather() {
            try {
                const response = await weatherService.getWeatherForCity('Montpellier');
                this.weather = response.data;
                console.log(this.weather)
            } catch (error) {
                console.error('Error fetching weather:', error);
            }
        },
    }

}
</script>

<template>
    <div class="meteo">
        <h1>Weather in Montpellier</h1>
        <button @click="fetchWeather">Fetch forecast</button>
        <p v-if="weather">Wind forecast for {{ weather.city.name }}: {{ weather.list[0].wind.speed }} knot(s)</p>
    </div>
</template>

<style scoped>
    .meteo{
        width: 100vw;
        height: 100vh;
        background: #ccc;
    }
</style>