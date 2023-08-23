export default abstract class AbstractCanvas {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    height: number
    width: number
    animationId: number

    constructor( canvas: HTMLCanvasElement ) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    
        this.width = canvas.width
        this.height = canvas.height
    }


    draw(...args): void {}

    // animate(): void {}

    resizeCanvas(width: number, height: number): void {}

}