export default class Particle {
    x: number
    y: number
    vx: number 
    vy: number 
    size: number
    color: string

    constructor(x: number, y: number, hue: number){
        this.x = (x + 5 * Math.random()) | 0
        this.y = (y + 5 * Math.random()) | 0
        this.color = `hsl( ${hue}, 100%, 50%)`
        this.size = (Math.random() * 15 + 1) | 0
        this.vx = (Math.random() * 7 - 3.5) | 0
        this.vy = (Math.random() * 7 - 3.5) | 0

        this.update()
    }

    update(){
        this.x += this.vx
        this.y += this.vy 
        if(this.size >= 1) this.size -= .3
    }

    draw( ctx : CanvasRenderingContext2D){
        
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
        ctx.fill()
        ctx.stroke()
    }
    


}