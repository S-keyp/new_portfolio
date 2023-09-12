<script lang="ts">
import weatherService from './../services/weatherService.ts'
import Miniboussole from './Miniboussole.vue'

interface Forecast {
    clouds: {
        all:number,
    },
    dt: number,
    dt_txt: string,
    main: {
        feels_like: number,
        grnd_lvl: number,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_kf: number,
        temp_max: number,
        temp_min: number,
    },
    pop: number,
    sys: {
        pod: string
    },
    visibility: number,
    weather: [{
        description: string,
        icon: string,
        id: number,
        main: string
    }],
    wind: {
        deg: number,
        gust: number,
        speed: number,
    },
    rain?: {
        '3h': number, //mm
    },
    snow?: {
        '3h': number, //mm
    } 
    
}
interface Forecasts {
    city: {
        coord: {
            lon: number,
            lat: number
        },
        country: string,
        id: number,
        name: string,
        population: number,
        sunrise: number,
        sunset: number,
        timezone: number,

    },
    cnt: number,
    cod: string,
    list: [Forecast],
    message: number
}

export default {
    data(){
        return {
            forecasts: null as Forecasts | null,
        }
    },
    methods: {
        async fetchWeather() {
            try {
                const response = await weatherService.getWeatherForCity('paris')
                this.forecasts = response.data as Forecasts
                console.log(this.forecasts)
            } catch (error) {
                console.error('Error fetching weather:', error);
            }
        },
    },
    components: {
        Miniboussole,
    }
}
</script>

<template>
    <div class="meteo">
        <h1>Weather in Montpellier</h1>
        <button @click="fetchWeather">Fetch forecast</button>
        <template v-if="forecasts">
            <p>Wind forecast for {{ forecasts.city.name }}: {{ forecasts.list[0].wind.speed * 3.6 }} Km/h</p>

            <p v-for="forecast in forecasts.list"><Miniboussole :windangle="forecast.wind.deg + 90" /> deg {{ (forecast.wind.speed * 3.6).toFixed(2) }}  Km/h, gust: {{ (forecast.wind.gust * 3.6).toFixed(2) }}  Km/h at: {{ forecast.dt_txt }}</p>
        </template>
        <template v-else>
            <p>No Forecast found</p>
        </template>
    </div>
</template>

<style scoped>
    .meteo{
        width: 100vw;
        height: 100vh;
        background: #ccc;
    }
</style>