export default class SimpleCircle {
    hue = 0
    radius = Math.random() * 150
    angle = Math.random() * 2 * Math.PI 
    angleVelocity = Math.random() * .1

    center = {
        x: 500,
        y: 500
    }
    currentCoords = {
        x: 500,
        y: 500
    }

    constructor(x: number, y: number, hue: number) {
        this.hue = hue
        this.updateCenter(x,y)
    }

    updateCenter(x: number, y: number) {
        this.center.x = x
        this.center.y = y
    }

    updateCurrentCoords = () => {
        this.currentCoords.x = this.center.x + this.radius * Math.sin(this.angle)
        this.currentCoords.y = this.center.y + this.radius * Math.cos(this.angle)
    }

    update(previousCircle: SimpleCircle){
        const gravity = .1
        const damping = .999
        
        const acceleration = (-1 * gravity / this.radius) * Math.sin(this.angle)
        this.angleVelocity += acceleration
        this.angleVelocity *= damping
        // this.angleVelocity = .01
        this.angle += this.angleVelocity
        this.updateCenter(previousCircle.currentCoords.x, previousCircle.currentCoords.y)
        this.updateCurrentCoords()
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.fillStyle = `hsl(${this.hue} 100% 50% / 0.95)`
        ctx.beginPath()
        ctx.arc(this.currentCoords.x, this.currentCoords.y, 2, 0, Math.PI * 2)
        ctx.fill()
    }


}