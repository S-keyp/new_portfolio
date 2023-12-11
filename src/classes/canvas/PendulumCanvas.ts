import AbstractCanvas from "./AbstractCanvas"
import SimpleCircle from "../objects/SimpleCircle"

export default class PendulumCanvas extends AbstractCanvas {
    shapesArray: SimpleCircle[] = []
    

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
            
            // Update the center coordinates before updating current coordinates
            newCircle.updateCenter(prevCircle.currentCoords.x, prevCircle.currentCoords.y);
            
            this.shapesArray.push(newCircle);
        } else {
            this.shapesArray.push(new SimpleCircle(x, y, this.hue));
        }
        
    }

    
    
    animate(timeStamp: DOMHighResTimeStamp){  
        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp
        
        
        if(this.timer > this.interval){
            this.hue += 1
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.fillStyle = `hsl(0 0% 0% / 0)`
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

            
            for(let i = 0; i < this.shapesArray.length; i++){
                // if(i == 0) this.shapesArray[i].updateCurrentCoords()
                // else {
                //     this.shapesArray[i].update(this.shapesArray[i - 1])
                //     this.shapesArray[i].draw(this.ctx)
                // }

                if(i == 0) this.shapesArray[i].updateCurrentCoords()
                else if(i == this.shapesArray.length - 1) {
                    this.shapesArray[i].update(this.shapesArray[i - 1])
                    this.shapesArray[i].draw(this.ctx)
                } else this.shapesArray[i].update(this.shapesArray[i - 1])
            }
            
    
            this.timer = 0

        } else this.timer += deltaTime
        
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}