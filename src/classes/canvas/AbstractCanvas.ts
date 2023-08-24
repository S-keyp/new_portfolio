export default abstract class AbstractCanvas {
    canvas: HTMLCanvasElement 
    ctx: CanvasRenderingContext2D
    
    animationId = 0

    constructor( idCanvas: string ) {
        this.canvas = document.getElementById(idCanvas) as HTMLCanvasElement
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D

        // TODO: get computed layout of canvas to resize according to css
        // ex if height = 90% => apply 10% correction on mouse cursor 
    
        
    }


    draw(...args: number[]): void {}

    // animate(): void {}

    resizeCanvas(width: number, height: number): void {
        this.canvas.width = width
        this.canvas.height = height
    }

}