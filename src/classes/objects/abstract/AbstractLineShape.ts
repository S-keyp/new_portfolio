import Line from '../Line';

export default abstract class AbstractShape {
    x: number
    y: number
    edgeCount: number
    baseShape: Array<{pointName: string, pointVal: {x:number, y: number}}> = []
    linesArray: Line[] = []

    constructor(x: number, y: number, edgeCount: number){
        this.x = x
        this.y = y
        this.edgeCount = edgeCount

        // create points array: [{pointName: string, pointVal: {x:number, y:number}]
        // this.createShape()
        // this.createLines()
    }

    createShape(){
        throw new Error("abstractMethod create shape not implemented");
    }


    createLines(){
        for(let i = 1; i < this.baseShape.length; i++){
            this.linesArray.push(
                new Line(
                    i,
                    this.baseShape[i - 1].pointVal.x, 
                    this.baseShape[i - 1].pointVal.y,
                    this.baseShape[i].pointVal.x, 
                    this.baseShape[i].pointVal.y,
                    i * 255 % this.edgeCount
                )
            )
        }
    }

    update(){
        // BREAK CONDITION si le dernier élément est fini on arrête l'update
        if(this.linesArray[this.linesArray.length-1].alpha >= 1) return 

        
        for (let i = 1; i < this.linesArray.length; i++){
            this.linesArray[0].alpha = 1
            if(this.linesArray[i -1].alpha >= 1) this.linesArray[i].go = true
            this.linesArray[i].update()
        }
    }
    
    draw(ctx: CanvasRenderingContext2D){
        for (let i = 0; i < this.linesArray.length; i++){
            this.linesArray[i].draw(ctx)
        }
    }
}