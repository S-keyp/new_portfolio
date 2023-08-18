export default class FlowFieldEffect {
    ctx: CanvasRenderingContext2D
    height: number
    width: number
    i: number
    incr = 1

    animationId: number

    constructor( ctx: CanvasRenderingContext2D, width: number, height: number ) {
        this.ctx = ctx
        this.width = width
        this.height = height
        this.i = 50
        this.ctx.strokeStyle = 'white'

    }

    resizeFlowEffect(width: number, height: number){
        this.width = width
        this.height = height

    }

    draw(x: number, y: number){
        const length = 300
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(x + length, y + length)
        this.ctx.stroke()
    }

    animate(){  
        if(this.i > 500 || this.i < 0) this.incr *= -1
        this.i += this.incr
        this.draw(this.i, 20 *  Math.cos(this.i * .1) + 200)
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}