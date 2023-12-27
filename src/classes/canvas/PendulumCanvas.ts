import AbstractCanvas from "./AbstractCanvas"
import SimpleCircle from "../objects/SimpleCircle"

export default class PendulumCanvas extends AbstractCanvas {
    shapesArray: SimpleCircle[] = []

    gravity = .1
    damping = 0.999999


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

        // for (let i = 0; i < 1000; i++) {
        //     this.clickMousePosition(500, 500)
        // }
        this.animate(this.lastTime)
        
        // this.ctx.scale(1, 1)

    }

    setMousePosition(x: number, y: number) {
        // TO BE KEPT JUST IN CASE
        // this.mouse.x = x
        // this.mouse.y = y
        // this.mouseEventFire = ! this.mouseEventFire
        // if(this.mouseEventFire){
        // Draw line from this point to a random other
        // this.addSprite(x, y)
        // }
    }

    clickMousePosition(x: number, y: number) {
        this.mouse.x = x
        this.mouse.y = y

        if (this.shapesArray.length > 0) {
            const prevCircle = this.shapesArray[this.shapesArray.length - 1];
            const newCircle = new SimpleCircle(prevCircle.currentCoords.x, prevCircle.currentCoords.y, this.hue);

            newCircle.updateCenter(this.mouse.x, this.mouse.y);

            this.shapesArray.push(newCircle);
        } else {
            let tempPart = new SimpleCircle(x, y, this.hue)
            tempPart.updateCenter(x, y);
            this.shapesArray.push(tempPart);
        }

    }

    updateCoords() {
        let previous = null
        for (let current of this.shapesArray) {
            if (previous != null) {
                const acceleration = (-1 * this.gravity / current.radius) * Math.sin(current.angle)
                current.angleVelocity += acceleration
                current.angleVelocity *= this.damping
                current.angle += current.angleVelocity

                current.center.x = previous.currentCoords.x
                current.center.y = previous.currentCoords.y

                current.currentCoords.x = current.center.x + current.radius * Math.sin(current.angle)
                current.currentCoords.y = current.center.y + current.radius * Math.cos(current.angle)

            } else {
                current.currentCoords.x = current.center.x
                current.currentCoords.y = current.center.y
            }
            previous = current
        }
    }

    drawAll() {
        for (let i = 0; i < this.shapesArray.length; i++) {
            this.ctx.fillStyle = `hsl(${this.shapesArray[i].hue} 100% 50% / 0.95)`

            this.ctx.save()
            this.ctx.translate(this.shapesArray[i].currentCoords.x, this.shapesArray[i].currentCoords.y)
            this.ctx.fillRect(0, 0, 4, 4)
            this.ctx.restore()
        }
    }


    animate(timeStamp: DOMHighResTimeStamp) {
        this.lastTime = timeStamp

        while (this.timer < timeStamp) {
            this.hue += 1

            this.updateCoords()

            this.timer += 1000 / 60
        }

        this.ctx.fillStyle = `hsl(0 0% 0% / .05)`
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawAll()

        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}