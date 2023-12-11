export default class SimpleCircle {

    alpha = 0
    radius = 30
    angle = Math.PI / 2
    angleVelocity = .1
    center = {
        x: 500,
        y: 500
    }
    currentCoords = {
        x: 500,
        y: 500
    }

    constructor(x: number, y: number) {
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
        const gravity = 0.4
        const damping = 0.99
        
        const acceleration = (-1 * gravity / this.radius) * Math.sin(this.angle)
        this.angleVelocity += acceleration
        this.angleVelocity *= damping
      
        this.angle += this.angleVelocity
        this.updateCenter(previousCircle.currentCoords.x, previousCircle.currentCoords.y)
        this.updateCurrentCoords()
    }

    draw(ctx: CanvasRenderingContext2D){
        ctx.beginPath()
        ctx.arc(this.currentCoords.x, this.currentCoords.y, 2, 0, Math.PI * 2)
        ctx.fill()
    }


}