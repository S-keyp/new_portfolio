import AbstractCanvas from "./AbstractCanvas"

export default class FlowFieldEffect extends AbstractCanvas {
    i = 0
    incr = 1
    // angle = 0

    lastTime = 0
    interval = 1000 / 60
    timer = 0
    cellSize = 25
    gradient: CanvasGradient

    mouse = {
        x: this.width / 2,
        y: this.height / 2
    }

    constructor( canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number ) {
        super(canvas, ctx, width, height)
        this.ctx.lineWidth = 2
        // this.ctx.strokeStyle = 'white'
        this.createGradient()
        this.ctx.strokeStyle = this.gradient

        // this.init()
        this.animate(this.lastTime)

    }

    createGradient(){
        this.gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height)
        this.gradient.addColorStop( .2, '#FF5C33' )
        this.gradient.addColorStop( .4, '#ccccff' )
        this.gradient.addColorStop( .6, '#b3ffff' )
        this.gradient.addColorStop( .8, '#80ff80' )
        this.gradient.addColorStop( 1, '#FFFF33' )
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
    }

    drawLine(angle: number, x: number, y: number){
        const length = 300
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(x + 50 * angle, y + 50 * angle)
        this.ctx.stroke()
    }
    
    animate(timeStamp){  
        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp

        if(this.timer > this.interval){
            this.ctx.clearRect(0, 0, this.width, this.height)

            for( let y = 0; y < this.height; y += this.cellSize){
                for( let x = 0; x < this.width; x += this.cellSize){

                    const angle = Math.cos(x) + Math.sin(y)
                    this.drawLine(angle, x, y)
                
                }
            }



            this.timer = 0
        } else this.timer += deltaTime
        
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}