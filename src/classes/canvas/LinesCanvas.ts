import AbstractCanvas from "./AbstractCanvas"
import Shape from "../objects/Shape"

export default class LineCanvas extends AbstractCanvas {
    shapesArray: Shape[] = []
    
    mouseEventFire = true
    hue = 0

    lastTime = 0
    interval = 1000 / 60
    timer = 0

    mouse = {
        x: this.canvas.width / 2,
        y: this.canvas.height / 2
    }


    constructor() {
        super('linesCanvas')

        this.animate(this.lastTime)

    }
    
    setMousePosition(x: number, y: number){
        // TO BE KEPT JUST IN CASE
        // this.mouse.x = x
        // this.mouse.y = y
        // this.mouseEventFire = ! this.mouseEventFire
        // if(this.mouseEventFire){
        //     // Draw line from this point to a random other
        //     // this.addSprite(x, y)
        // }
        
    }

    clickMousePosition(x: number, y: number){
        this.mouse.x = x
        this.mouse.y = y

        this.shapesArray.push(new Shape(x, y, 3))
    }

    
    
    animate(timeStamp: DOMHighResTimeStamp){  
        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp
        
        
        if(this.timer > this.interval){
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.fillStyle = 'rgba(0,0,0,0.15)'
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
            
            for(let i = 0; i < this.shapesArray.length; i++){
                this.shapesArray[i].update()
                this.shapesArray[i].draw(this.ctx)
            }
            
            
            this.timer = 0

        } else this.timer += deltaTime
        
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}