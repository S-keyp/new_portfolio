import Particle from "./Particle"

export default class FastParticle extends Particle { 

    constructor(x: number, y: number, hue: number){
        super(x, y, hue)
        this.vx *= 5
        this.vy *= 5

        this.update()
    } 


}