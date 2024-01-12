<script setup lang="ts">
import { ref } from 'vue';
import weatherService from '../../services/weatherService.ts'
import Miniboussole from './Miniboussole.vue'
import SearchInput from './searchComponents/SearchInput.vue'
import Forecasts from './interface/Forecasts.ts'



  
let forecasts = ref<Forecasts>()

async function fetchWeather(city: string) {
    console.log('city: ', city);
    try {
        const response = await weatherService.getWeatherForCity(city)
        forecasts.value = response.data as Forecasts
        console.log(forecasts)
    } catch (error) {
        alert(`Error fetching weather: ${city} not found`);
    }
}


</script>

<template>
    <div class="meteo">
        <h1>Weather</h1>
        <SearchInput @search-word="(city) => fetchWeather(city)"/>
        <template v-if="forecasts?.list">
            <p>Wind forecast for {{ forecasts.city.name }}: {{ (forecasts.list[0].wind.speed * 3.6).toFixed(2) }} Km/h</p>

            <p v-for="forecast in forecasts.list"><Miniboussole :windangle="forecast.wind.deg + 90" /> deg {{ (forecast.wind.speed * 3.6).toFixed(2) }}  Km/h, 
                Gust: {{ (forecast.wind.gust * 3.6).toFixed(2) }}  Km/h at: {{ forecast.dt_txt }}</p>
        </template>
        <template v-else>
            <p>No Forecast found</p>
        </template>
    </div>
</template>

<style scoped>
    .meteo{
        width: 100vw;
        background: #ccc;
    }
</style>