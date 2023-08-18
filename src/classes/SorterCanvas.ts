import AbstractCanvas from "./AbstractCanvas"

export default class FlowFieldEffect extends AbstractCanvas {
    i: number
    incr = 1

    constructor( canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number ) {
        super(canvas, ctx, width, height)
        
        this.i = 50
        this.ctx.fillStyle = 'white'

        this.animate()

    }


    draw(x: number, y: number): void {
        this.ctx.clearRect(0,0,this.width, this.height)
        this.ctx.beginPath()
        this.ctx.fillRect(x, y, 10, 20)
        this.ctx.stroke()
        console.log(`draw`)
    }

    animate(): void{  
        if(this.i > 290 || this.i < 0) this.incr *= -1
        console.log(`animate`)
        this.i += this.incr
        this.draw(this.i, 130)
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}