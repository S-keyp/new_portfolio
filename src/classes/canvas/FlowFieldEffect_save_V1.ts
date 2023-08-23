import AbstractCanvas from "./AbstractCanvas"

export default class FlowFieldEffect extends AbstractCanvas {
    i = 0
    incr = 1
    gradient: CanvasGradient

    mouse = {
        x: this.width / 2,
        y: this.height / 2
    }

    constructor() {
        const canvas = document.getElementById('flowFieldEffect') as HTMLCanvasElement
        super(canvas)
        this.ctx.lineWidth = 2

        this.createGradient()
        this.ctx.strokeStyle = this.gradient

        this.animate()

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

    draw(x: number, y: number){
        const length = 300
        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(this.mouse.x, this.mouse.y)
        this.ctx.stroke()
    }
    
    animate(){  
        // this.ctx.clearRect(0, 0, this.width, this.height)
        this.draw(this.width / 2, this.height / 2)

        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}