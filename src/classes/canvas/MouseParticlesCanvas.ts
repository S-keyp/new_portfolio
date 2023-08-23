import AbstractCanvas from "./AbstractCanvas"
import Particle from "../objects/Particle"

export default class MouseParticleEffect extends AbstractCanvas {
    i = 0
    incr = 1
    particlesArray = []
    

    lastTime = 0
    interval = 1000 / 60
    timer = 0
    cellSize = 50
    gradient: CanvasGradient

    mouse = {
        x: this.width / 2,
        y: this.height / 2
    }

    constructor( ) {
        const canvas = document.getElementById('mouseParticleCanvas') as HTMLCanvasElement
console.log(canvas)
        super(canvas)

        for(let i = 0; i <5; i++){
            this.particlesArray.push(new Particle(250, 250))
        }
        console.log(`${this.particlesArray}`)

        this.animate(this.lastTime)

    }

    // addSprites(x: number, y: number){
    //     for(let i = 0; i <5; i++){
    //         this.particlesArray.push(new Particle(250, 250))
    //     }
    // }

    resizeCanvas(width: number, height: number): void{
        // ajouter 2ème condition pour s'assurer que ça reste un rectangle
        if(width > 1.25 * height ){
            this.width = width
            this.height = height
        }
    }

    setMousePosition(x: number, y: number){
        // this.mouse.x = this.width / 2
        // this.mouse.y = this.height / 2
        // JUST HAVE TO UNCOMMENT BELOW TO TRACK
        this.mouse.x = x
        this.mouse.y = y
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.ctx.fillStyle = '#' + randomColor
        for(let i = 0; i < Math.floor(Math.random() * 300); i++){
            this.particlesArray.push(new Particle(x, y))
        }
    }

    drawCircle( x: number, y: number, size: number){
        // let positionX = x
        // let positionY = y
        // let dx = this.mouse.x - positionX
        // let dy = this.mouse.y - positionY
        // let distance = Math.sqrt(dx * dx + dy * dy)
        // if(distance < 100) 
        
        this.ctx.beginPath()
        this.ctx.arc(x, y, size, 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.stroke()
    }
    
    animate(timeStamp){  
        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp
        
        
        if(this.timer > this.interval){
            // this.ctx.clearRect(0, 0, this.width, this.height)
            
            
            for( let i = 0; i < this.particlesArray.length; i++){
                this.particlesArray[i].animate()
                this.drawCircle(this.particlesArray[i].x, this.particlesArray[i].y, this.particlesArray[i].size)

                if(this.particlesArray[i].size < 1) this.particlesArray.splice(i, 1)
            }

            this.timer = 0

        } else this.timer += deltaTime
        
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}