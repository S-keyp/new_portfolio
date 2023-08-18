export default abstract class AbstractCanvas {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    height: number
    width: number

    animationId: number

    constructor( canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number ) {
        this.canvas = canvas
        this.ctx = ctx
        this.width = width
        this.height = height
    }


    draw(x: number, y: number): void {}

    animate(): void {}


}