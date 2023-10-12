import { lerp1D } from './../utils/MathFunc'

export default class Line {
    color: string
    
    x1: number
    y1: number
    x2: number
    y2: number

    alpha: number
    xAlpha: number
    yAlpha: number

    id: number

    go = false
    

    constructor(id: number, x1: number, y1: number, x2: number, y2: number, hue: number){
        this.id = id
        this.x1 = x1
        this.y1 = y1
        this.x2 = x2
        this.y2 = y2
        this.xAlpha = x1
        this.yAlpha = y1
        this.color = '#fff'
        this.alpha = 0
        this.color = `hsl( ${hue + x1 - y1}, 40%, 50%)`


        this.update()
    }

    update(){
        // return if the previous line isn't finished
        if(!this.go) return
        if(this.alpha >= 1) return
        else this.alpha += 1 // 0.25

        this.xAlpha = lerp1D(this.x1, this.x2, this.alpha)
        this.yAlpha = lerp1D(this.y1, this.y2, this.alpha)
    }

    draw(ctx : CanvasRenderingContext2D){
        ctx.strokeStyle = this.color
        ctx.beginPath()
        ctx.moveTo(this.x1, this.y1)
        ctx.lineTo(this.xAlpha, this.yAlpha)
        ctx.stroke()
    }
    
}