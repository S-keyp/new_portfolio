import AbstractCanvas from "./AbstractCanvas"

export default class FlowFieldEffect extends AbstractCanvas {
    i = 0
    incr = 1
    angle = 0

    mouse = {
        x: 0,
        y: 0
    }

    constructor( canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number ) {
        super(canvas, ctx, width, height)
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'

        // this.init()
        // this.draw(200, 200)
        this.animate()

    }

    resizeCanvas(width: number, height: number): void{
        // ajouter 2ème condition pour s'assurer que ça reste un rectangle
        if(width > 1.25 * height ){
            this.width = width
            this.height = height
        }
    }

    setMousePosition(x: number, y: number){
        this.mouse.x = x
        this.mouse.y = y
        console.log(this.mouse.x, this.mouse.y)
    }

    draw(x: number, y: number){
        const length = 300
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(this.mouse.x, this.mouse.y)
        this.ctx.stroke()
    }
    
    animate(){  
        this.angle += .01
        // this.ctx.clearRect(0, 0, this.width, this.height)
        this.draw(this.width / 2, this.height / 2)
        
        // if(this.i > 500 || this.i < 0) this.incr *= -1
        // this.i += this.incr


        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}