import AbstractCanvas from "./AbstractCanvas"
// import SimpleCircle from "../objects/SimpleCircle"
import Particle from "../objects/basics/Particle"

export default class TestBetterCanvas extends AbstractCanvas {
    particlesArr: Particle[] = []
    controlPts: { pt1x: number, pt1y: number, pt2x: number, pt2y: number }[] = [{
        pt1x : 0,
        pt1y : 0,
        pt2x : 0,
        pt2y : 0
    }]
    prevParticle : any = null 
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

        this.animate(this.lastTime)
    }

    setMousePosition(x: number, y: number) {

    }

    randomDistribute(x: number, y: number) {
        let r = Math.random() * 2 * Math.PI
        return {
            x: x + r * 5 * Math.cos(r),
            y: y + r * 5 * Math.sin(r),
        }
    }
    randomDistributeObj(a: { x: number; y: number }) {
        let r = Math.random() * 4 * Math.PI
        return {
            x: a.x + r * 50 * Math.cos(r),
            y: a.y + r * 50 * Math.sin(r),
        }
    }

    clickMousePosition(x: number, y: number) {
        this.mouse = this.randomDistribute(x, y)
        let tempParticle = new Particle(this.mouse.x, this.mouse.y)
        this.particlesArr.push(tempParticle)

        if (this.particlesArr.length > 0 && this.prevParticle ) {
            let a1 = this.randomDistributeObj(this.prevParticle.getCoordinates())
            let a2 = this.randomDistributeObj(tempParticle.getCoordinates())
            let pt1x = a1.x
            let pt1y = a1.y
            let pt2x = a2.x
            let pt2y = a2.y
            this.controlPts.push({ pt1x, pt1y, pt2x, pt2y })
        }
        this.prevParticle = tempParticle
    }

    drawAll() {
        for (let i = 0; i < this.particlesArr.length; i++) {
            if (i == 0 || this.controlPts.length == 0) continue
            this.ctx.beginPath()
            this.ctx.lineWidth = Math.random() * 2
            this.ctx.fillStyle = this.particlesArr[i].getFullHsl()
            this.ctx.moveTo(this.particlesArr[i - 1].getCoordinates().x, this.particlesArr[i - 1].getCoordinates().y)
            // this.ctx.fillRect( this.particlesArr[i -1].getCoordinates().x, this.particlesArr[i - 1].getCoordinates().y, 2, 2)
            this.ctx.bezierCurveTo(this.controlPts[i].pt1x, this.controlPts[i].pt1y, this.controlPts[i].pt2x, this.controlPts[i].pt2y, this.particlesArr[i].getCoordinates().x, this.particlesArr[i].getCoordinates().y)
            this.ctx.strokeStyle = this.particlesArr[i].getFullHsl()
            this.ctx.stroke()
        }
    }

    // perlinBezier(start, ...args, end){

    // }

    animate(timeStamp: DOMHighResTimeStamp) {
        this.lastTime = timeStamp

        while (this.timer < timeStamp) {
            this.hue += 1

            this.hue += 1
            this.ctx.fillStyle = `hsl(0 0% 0% / .15)`
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

            this.timer += 1000 / 60
        }
       
        this.drawAll()

        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}