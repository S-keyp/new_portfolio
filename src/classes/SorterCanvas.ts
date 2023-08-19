import AbstractCanvas from "./AbstractCanvas"

export default class FlowFieldEffect extends AbstractCanvas {
    i: number
    incr = 1
    grid = []
    cellWidth : number

    constructor( canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, width: number, height: number ) {
        super(canvas, ctx, width, height)
        
        this.ctx.fillStyle = 'white'

        this.init()
        this.animate()


        // TEST SORTING
        setTimeout( ()=> {
            this.bulleSorting()
        }, 2500)

        // setInterval( ()=> {
        //     this.insertionSorting()
        // }, 2500)

    }

    init(){
        for(let i = 0; i < 100; i++){
            this.grid.push((Math.random()).toFixed(3))
        }
        this.cellWidth = this.width / this.grid.length
    }

    compare(a: number, b: number){
        return a < b 
    }

    insertionSorting(){
        for(let i = 1; i < this.grid.length; i++){
            let j = i
            while( j > 0 && this.grid[j - 1] > this.grid[j]){
                let temp = this.grid[j]
                let temp1 = this.grid[j - 1]
                this.grid[j] = temp1
                this.grid[j - 1] = temp
                j--
            }
        }
    }

    bulleSorting(){
        for(let i = this.grid.length; i > 1; i--){
            for(let j = 0; j < i - 1; j++){
                if(this.compare(this.grid[j + 1], this.grid[j])){
                    let toPermuteA = this.grid[j]
                    let toPermuteB = this.grid[j + 1]
                    this.grid[j] = toPermuteB
                    this.grid[j + 1] = toPermuteA
                }
            }

        }
        return this.grid
    }


    draw(x: number, y: number, cellValue: number): void { 

        const colorValue = Math.floor(cellValue * 360) // 360
        // this.ctx.fillStyle = `hsl( ${colorValue} ${(1 - cellValue) * 100}% ${cellValue * 100}% / ${cellValue} )`

        const saturation = 100 // - cellValue * 100; // Reverse the value for better contrast
        const lightness = 50 // cellValue * 100; // Adjust as needed

        const my_gradient = this.ctx.createLinearGradient(x, y, x, cellValue * this.height);
        my_gradient.addColorStop(0, `hsl( ${colorValue}deg ${saturation}% ${lightness}% )`);
        my_gradient.addColorStop(1, `hsl( ${colorValue}deg ${saturation}% ${.5 * lightness}% )`);
        this.ctx.fillStyle = my_gradient;

        this.ctx.fillRect(x, y, this.cellWidth, -cellValue * this.height)

    }

    animate(): void{  
        this.ctx.clearRect(0, 0, this.width, this.height)

        for(let i= 0; i < this.grid.length; i++) {
            this.draw(i * this.cellWidth, this.height - 5, this.grid[i])
        }
        this.animationId = requestAnimationFrame(this.animate.bind(this))
    }


}