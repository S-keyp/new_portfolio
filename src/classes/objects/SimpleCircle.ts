export default class SimpleCircle {
    hue = 0
    radius = 150 // Math.random() * 150 // Math.random() * 250
    angle = Math.random() > .5 ? 10 : -10 // Math.random() * 2 * Math.PI 
    angleVelocity = (Math.random() * .01) / 9000

    center = {
        x: 1000,
        y: 1000
    }
    currentCoords = {
        x: -10,
        y: -10
    }

    constructor(x: number, y: number, hue: number) {
        this.hue = hue
        this.updateCenter(x, y)
    }

    updateCenter(x: number, y: number) {
        this.center.x = x
        this.center.y = y
    }
}