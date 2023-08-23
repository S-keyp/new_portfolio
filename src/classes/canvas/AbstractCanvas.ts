export default abstract class AbstractCanvas {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    height: number
    width: number
    animationId: number

    constructor( canvas: HTMLCanvasElement ) {
        console.log(`hello world`)
        this.canvas = canvas
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D

        // TODO: get computed layout of canvas to resize according to css
        // ex if height = 90% => apply 10% correction on mouse cursor 
    
        this.width = canvas.width
        this.height = canvas.height
    }


    draw(...args): void {}

    // animate(): void {}

    resizeCanvas(width: number, height: number): void {}

}