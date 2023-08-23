export default class Particle {
    x: number
    y: number
    vx: number 
    vy: number 
    size: number

    constructor(x: number, y: number){
        this.x = x //+ 30 * Math.random()
        this.y = y //+ 30 * Math.random()

        if(Math.random() < .5)this.vx = 5 * Math.random()
        else this.vx = -5 * Math.random()
        if(Math.random() < .5)this.vy = 5 * Math.random()
        else this.vy = -5 * Math.random()

        this.size = 20 * Math.random()

        this.animate()
    }

    animate(){
        this.x += this.vx
        this.y += this.vy 
        if(this.size > 1) this.size -= .2
    }


    


}