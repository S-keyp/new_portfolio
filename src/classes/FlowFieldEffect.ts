export default class FlowFieldEffect {
    #ctx: CanvasRenderingContext2D
    #height: number
    #width: number
    #i: number

    constructor( ctx: CanvasRenderingContext2D, width: number, height: number ) {
        this.#ctx = ctx
        this.#width = width
        this.#height = height
        this.#i = 50
        this.#ctx.strokeStyle = 'white'

    }

    #draw(x: number, y: number){
        const length = 300
        this.#ctx.beginPath()
        this.#ctx.moveTo(x, y)
        this.#ctx.lineTo(x + length, y + length)
        this.#ctx.stroke()
    }

    animate(){  
        this.#i += 1
        this.#draw(this.#i, 20 *  Math.cos(this.#i * .1) + 200)
        requestAnimationFrame(this.animate.bind(this))
    }


}