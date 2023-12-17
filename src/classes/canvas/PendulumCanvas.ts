import AbstractCanvas from "./AbstractCanvas"
import SimpleCircle from "../objects/SimpleCircle"

export default class PendulumCanvas extends AbstractCanvas {
    shapesArray: SimpleCircle[] = []

    gravity = .0000000001
    damping = 1
    

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
            // Draw line from this point to a random other
            // this.addSprite(x, y)
        // }
    }   

    clickMousePosition(x: number, y: number){
        this.mouse.x = x
        this.mouse.y = y

        if (this.shapesArray.length > 0) {
            const prevCircle = this.shapesArray[this.shapesArray.length - 1];
            const newCircle = new SimpleCircle(prevCircle.currentCoords.x, prevCircle.currentCoords.y, this.hue);
            
            newCircle.updateCenter(this.mouse.x, this.mouse.y);
            
            this.shapesArray.push(newCircle);
        } else {
            this.shapesArray.push(new SimpleCircle(x, y, this.hue));
        }
        
    }
    
    updateCoords(){
        for(let i = 0; i < this.shapesArray.length; i++){
            if(i == 0) continue
            const acceleration = (-1 * this.gravity / this.shapesArray[i].radius) * Math.sin(this.shapesArray[i].angle)
            this.shapesArray[i].angleVelocity += acceleration
            this.shapesArray[i].angleVelocity *= this.damping
            this.shapesArray[i].angle += this.shapesArray[i].angleVelocity

            this.shapesArray[i].center.x = this.shapesArray[i - 1].currentCoords.x
            this.shapesArray[i].center.y = this.shapesArray[i - 1].currentCoords.y

            this.shapesArray[i].currentCoords.x = this.shapesArray[i].center.x + this.shapesArray[i].radius * Math.sin(this.shapesArray[i].angle)
            this.shapesArray[i].currentCoords.y = this.shapesArray[i].center.y + this.shapesArray[i].radius * Math.cos(this.shapesArray[i].angle) 
            
        }
    }

    drawAll(){
        this.ctx.beginPath()
        for(let i = 0; i < this.shapesArray.length; i++){
            this.ctx.fillStyle = `hsl(${this.shapesArray[i].hue} 100% 50% / 0.95)`
            this.ctx.fillRect(this.shapesArray[i].currentCoords.x, this.shapesArray[i].currentCoords.y, 20, 4)
        }
        this.ctx.fill()
    }

    
    animate(timeStamp: DOMHighResTimeStamp){  
        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp
        
        
        if(this.timer > this.interval){
            this.hue += 1
            this.ctx.fillStyle = `hsl(0 0% 0% / .15)`
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

            this.updateCoords()
            this.drawAll()
    
            this.timer = 0

        } else this.timer += deltaTime
        
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}