import AbstractCanvas from "./AbstractCanvas"

export default class FlowFieldEffect extends AbstractCanvas {
    i = 0
    incr = 1
    // angle = 0
    radius = 0
    radiusSpeed = .009

    lastTime = 0
    interval = 1000 / 60
    timer = 0
    cellSize = 15
    gradient: CanvasGradient

    mouse = {
        x: this.canvas.width / 2,
        y: this.canvas.height / 2
    }

    constructor() {
        super('flowFieldEffect')
        this.ctx.lineWidth = 1


        this.gradient = this.createGradient()
        this.ctx.strokeStyle = this.gradient

        this.animate(this.lastTime)

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
        // this.mouse.x = this.canvas.width / 2
        // this.mouse.y = this.canvas.height / 2
        // JUST HAVE TO UNCOMMENT BELOW TO TRACK
        this.mouse.x = x
        this.mouse.y = y
    }

    drawLine(angle: number, x: number, y: number){
        let positionX = x
        let positionY = y
        let dx = this.mouse.x - positionX
        let dy = this.mouse.y - positionY
        let distance = dx * dx + dy * dy
        if(distance > 600000) distance = 600000
        else if(distance < 20000) distance = 20000
        
        let length = distance * .0001

        this.ctx.beginPath()
        this.ctx.moveTo(x, y)
        this.ctx.lineTo(x + length * Math.cos(angle), y + length * Math.sin(angle)) 
        this.ctx.stroke()
    }
    
    animate(timeStamp: DOMHighResTimeStamp){  
        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp
        
        
        if(this.timer > this.interval){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            
            this.radius += this.radiusSpeed
            if(this.radius > 1.5 || this.radius < -1.5) this.radiusSpeed *= -1
            
            for( let y = 0; y < this.canvas.height; y += this.cellSize){
                for( let x = 0; x < this.canvas.width; x += this.cellSize){
                    if(x % (3 * this.cellSize) === 0) this.ctx.strokeStyle = 'blue'
                    else this.ctx.strokeStyle = this.gradient
                    
                    const angle = (Math.cos(x * .01) + Math.sin(y * .01)) * this.radius
                    this.drawLine(angle, x, y)
                }
            }

            this.timer = 0

        } else this.timer += deltaTime
        
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}