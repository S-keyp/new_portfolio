import Forecast from './Forecast.ts'

export default interface Forecasts {
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