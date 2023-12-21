import AbstractCanvas from "./AbstractCanvas"
import Particle from "../objects/Particle"
import FastParticle from "../objects/FastParticle"

export default class MouseParticleCanvas extends AbstractCanvas {
    particlesArray: Particle[] = []
    
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
        super('mouseParticleCanvas')

        this.animate(this.lastTime)

    }

    addSprite(x: number, y: number){
        this.hue += .05
        for(let i = 0; i < 2; i++){
            this.particlesArray.push(new Particle(x, y, this.hue))
        }
    
    }

    addFastSprite(x: number, y: number){
        this.hue += 15
        for(let i = 0; i < 25; i++){
            this.particlesArray.push(new FastParticle(x, y, this.hue))
        }
    }

    

    setMousePosition(x: number, y: number){
        // this.mouse.x = this.canvas.width / 2
        // this.mouse.y = this.canvas.height / 2
        // JUST HAVE TO UNCOMMENT BELOW TO TRACK
        this.mouse.x = x
        this.mouse.y = y
        this.mouseEventFire = ! this.mouseEventFire
        if(this.mouseEventFire){
            this.addSprite(x, y)
        }
        
    }

    clickMousePosition(x: number, y: number){
        // this.mouse.x = this.canvas.width / 2
        // this.mouse.y = this.canvas.height / 2
        // JUST HAVE TO UNCOMMENT BELOW TO TRACK
        this.mouse.x = x
        this.mouse.y = y
        
        this.addFastSprite(x, y)
    }

    
    
    animate(timeStamp: DOMHighResTimeStamp){  
        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp
        
        
        if(this.timer > this.interval){
            // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.fillStyle = 'rgba(0,0,0,0.5)'
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
            
            for( let i = this.particlesArray.length - 1; i >= 0 ; i--){
                this.particlesArray[i].update()
                this.particlesArray[i].draw(this.ctx)

                for(let j = i; j <this.particlesArray.length; j++){
                    const dx = this.particlesArray[i].x - this.particlesArray[j].x
                    const dy = this.particlesArray[i].y - this.particlesArray[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if(dist < 60){
                        this.ctx.beginPath()
                        const grad = this.ctx.createLinearGradient(this.particlesArray[i].x, this.particlesArray[i].y,this.particlesArray[j].x, this.particlesArray[j].y)
                        grad.addColorStop(0, this.particlesArray[i].color)
                        grad.addColorStop(1, this.particlesArray[j].color)
                        this.ctx.strokeStyle = grad
                        this.ctx.moveTo(this.particlesArray[i].x, this.particlesArray[i].y)
                        this.ctx.lineTo(this.particlesArray[j].x, this.particlesArray[j].y)
                        this.ctx.stroke()
                    }
                }
                
            }
            this.particlesArray = this.particlesArray.filter(particle => particle.size >= 1);
            
            this.timer = 0

        } else this.timer += deltaTime
        
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}