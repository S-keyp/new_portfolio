import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const weatherService = {
    getWeatherForCity(city: string) {
        const endpoint = `${BASE_URL}/forecast?q=${city}&appid=${import.meta.env.VITE_WETHER_API_KEY}`;
        return axios.get(endpoint);
    },
    // Add more methods for forecasts, etc.
};

export default weatherService;