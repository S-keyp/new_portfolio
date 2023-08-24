import AbstractCanvas from "./AbstractCanvas"

export default class FlowFieldEffect extends AbstractCanvas {
    i = 0
    incr = 1
    gradient: CanvasGradient

    mouse = {
        x: this.canvas.width / 2,
        y: this.canvas.height / 2
    }

    constructor() {
        super('flowFieldEffect')
        this.ctx.lineWidth = 2

        this.gradient = this.createGradient()
        this.ctx.strokeStyle = this.gradient

        this.animate()

    }

    createGradient(){
        this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, this.canvas.height)
        this.gradient.addColorStop( .2, '#FF5C33' )
        this.gradient.addColorStop( .4, '#ccccff' )
        this.gradient.addColorStop( .6, '#b3ffff' )
        this.gradient.addColorStop( .8, '#80ff80' )
        this.gradient.addColorStop( 1, '#FFFF33' )
        return this.gradient
    }

    

    setMousePosition(x: number, y: number){
        this.mouse.x = x
        this.mouse.y = y
    }

    draw(x: number, y: number){
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(this.mouse.x, this.mouse.y)
        this.ctx.stroke()
    }
    
    animate(){  
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.draw(this.canvas.width / 2, this.canvas.height / 2)

        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}