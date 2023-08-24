export default class Particle {
    x: number
    y: number
    vx: number 
    vy: number 
    size: number
    color: string

    constructor(x: number, y: number, hue: number){
        this.x = x + 5 * Math.random()
        this.y = y + 5 * Math.random()
        this.color = `hsl( ${hue}, 100%, 50%)`
        this.size = Math.random() * 15 + 1
        this.vx = Math.random() * 7 - 3.5
        this.vy = Math.random() * 7 - 3.5

        this.update()
    }

    update(){
        this.x += this.vx
        this.y += this.vy 
        if(this.size >= 1) this.size -= .3
    }

    draw( ctx : CanvasRenderingContext2D){
        
        // let dx = this.mouse.x - x
        // let dy = this.mouse.y - y
        // let distance = Math.sqrt(dx * dx + dy * dy)
        // if(distance < 100) {
            ctx.fillStyle = this.color
            ctx.strokeStyle = this.color
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
            ctx.fill()
            ctx.stroke()
        // }
    }
    


}