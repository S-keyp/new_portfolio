import axios from 'axios';

interface Weather {
    base: string,
    clouds: {all: number}
    coord: {
        lon: number,
        lat: number
    }
}

// Replace with your OpenWeatherMap API key
const API_KEY = process.env.OPENWEATHERMAP_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const weatherService = {
    getWeatherForCity(city: string) {
        const endpoint = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`;
        return axios.get(endpoint);
    },
    // Add more methods for forecasts, etc.
};

export default weatherService;