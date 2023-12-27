import AbstractCanvas from "./AbstractCanvas"
// import SimpleCircle from "../objects/SimpleCircle"
import Particle from "../objects/basics/Particle"

export default class TestBetterCanvas extends AbstractCanvas {
    particlesArr: Particle[] = [] 

    mouseEventFire = true
    hue = 0

    lastTime = 0
    interval = 1000 / 60
    timer = 0

    mouse = {
        x: this.canvas.width / 2,
        y: this.canvas.height / 2
    }
    
    screenCenter = {
        x: this.canvas.width / 2,
        y: this.canvas.height / 2
    }




    constructor() {
        super('testBetterCanvas')

        // for (let i = 0; i < 10; i++) {
        //     this.particlesArr.push(new Particle(Math.random() * 100, Math.random() * 100))
        // }

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
        console.log('thismouse', this.mouse);
        let tempParticle = new Particle(x,y)
        tempParticle.setRadius(this.calculateRadiusFromOrigin(tempParticle))
        this.particlesArr.push(tempParticle)
    }

    calculateRadiusFromOrigin(particle: Particle){     
        console.log('radius', Math.sqrt(particle.getCoordinates().x * particle.getCoordinates().x + particle.getCoordinates().y * particle.getCoordinates().y));   
        return Math.sqrt(particle.getCoordinates().x * particle.getCoordinates().x + particle.getCoordinates().y * particle.getCoordinates().y)
    }

    
    updateCoords(){
        // for(let i = 0; i < this.shapesArray.length; i++){
            // if(i == 0) continue
            // const acceleration = (-1 * this.gravity / this.shapesArray[i].radius) * Math.sin(this.shapesArray[i].angle)
            // this.shapesArray[i].angleVelocity += acceleration
            // this.shapesArray[i].angleVelocity *= this.damping
            // this.shapesArray[i].angle += this.shapesArray[i].angleVelocity

            // this.shapesArray[i].center.x = this.shapesArray[i - 1].currentCoords.x
            // this.shapesArray[i].center.y = this.shapesArray[i - 1].currentCoords.y

            // this.shapesArray[i].currentCoords.x = this.shapesArray[i].center.x + this.shapesArray[i].radius * Math.sin(this.shapesArray[i].angle)
            // this.shapesArray[i].currentCoords.y = this.shapesArray[i].center.y + this.shapesArray[i].radius * Math.cos(this.shapesArray[i].angle) 
            
        // }
    }

    drawAll(){
        this.ctx.beginPath()
        for(let i = 0; i < this.particlesArr.length; i++){
            this.ctx.fillStyle = this.particlesArr[i].getFullHsl()
            this.ctx.fillRect(this.particlesArr[i].getCoordinates().x, this.particlesArr[i].getCoordinates().y, 10, 10)
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