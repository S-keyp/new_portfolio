export default class Particle {
    private x = 0
    private y = 0
    private radius = 0
    private hue= 0
    private saturation= 0
    private light= 0

    constructor(x: number, y: number, hue: number = Math.random() * 255, saturation: number = 70, light: number = 80) {
        this.setCoordinates(x, y);
        this.hue = hue
        this.saturation = saturation
        this.light = light
    }

    getCoordinates(){
        return {x: this.x, y: this.y}
    }

    setCoordinates(x: number, y: number){
        this.x = x
        this.y = y
    }

    setHue(hue: number){
        this.hue = hue
    }

    getHue(){
        return this.hue
    }

    getFullHsl(){
        return `hsl(${this.hue} ${this.saturation}% ${this.light}% / 0.95)`
    }

    getRadius(){
        return this.radius
    }
    
    setRadius(radius: number){
        this.radius = radius
    }

}