export default  interface Forecast {
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