export default class SimpleCircle {
    hue = 0
    radius = Math.random() * 300 // Math.random() * 250
    angle = Math.random() * 2 * Math.PI 
    angleVelocity = (Math.random() * .0000012) / 2000000000000000

    center = {
        x: 1000,
        y: 1000
    }
    currentCoords = {
        x: 500,
        y: 500
    }

    constructor(x: number, y: number, hue: number) {
        this.hue = hue
        this.updateCenter(x, y)
    }

    updateCenter(x: number, y: number) {
        this.center.x = x
        this.center.y = y
    }


    update(previousCircle: SimpleCircle){
       
    }

    draw(ctx: CanvasRenderingContext2D){
        
    }


}