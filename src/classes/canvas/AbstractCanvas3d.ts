export default abstract class AbstractCanvas {
    canvas: HTMLCanvasElement 
    gl: WebGL2RenderingContext
    
    animationId = 0

    constructor( idCanvas: string ) {
        this.canvas = document.getElementById(idCanvas) as HTMLCanvasElement
        this.gl = this.canvas.getContext('webgl2') as WebGL2RenderingContext

        if (this.gl === null) {
            alert(
              "Unable to initialize Webthis.GL. Your browser or machine may not support it.",
            );
            return;
          }
        
          // Set clear color to black, fully opaque
          this.gl.clearColor(0.5, 1.0, 0.25, 1.0);
          // Clear the color buffer with specified clear color
          this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    
        
    }


    draw(...args: number[]): void {}

    // animate(): void {}

    resizeCanvas(width: number, height: number): void {
        this.canvas.width = width
        this.canvas.height = height
    }

}