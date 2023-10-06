import Line from './Line';
import { lerp1D } from '../utils/MathFunc';

class Point {

}

export default class Shape {
    x: number
    y: number
    edgeCount: number
    baseShape: Array<{pointName: string, pointVal: {x:number, y: number}}> = []
    linesArray: Line[] = []

    constructor(x: number, y: number, edgeCount: number){
        this.x = x
        this.y = y
        this.edgeCount = edgeCount

        this.createShape()
    }

    createShape(){
        for(let i = 0; i < this.edgeCount; i++){
            if(i == 0){
                this.baseShape.push({
                    pointName: String.fromCharCode(97 + i),
                    pointVal: {
                        x: parseFloat((this.x).toFixed(3)),
                        y: parseFloat((this.y).toFixed(3))
                    }
                })
                continue
            }
            if(Math.random() > .5){
                if(Math.random() > .5){
                    this.baseShape.push({
                        pointName: String.fromCharCode(97 + i),
                        pointVal: {
                            x: parseFloat((this.x + 750 * Math.random()).toFixed(3)),
                            y: parseFloat((this.y + 750 * Math.random()).toFixed(3))
                        }
                    })
                }else {
                    this.baseShape.push({
                        pointName: String.fromCharCode(97 + i),
                        pointVal: {
                            x: parseFloat((this.x - 750 * Math.random()).toFixed(3)),
                            y: parseFloat((this.y - 750 * Math.random()).toFixed(3))
                        }
                    })
                }
            } else {
                if(Math.random() > .5){
                    this.baseShape.push({
                        pointName: String.fromCharCode(97 + i),
                        pointVal: {
                            x: parseFloat((this.x + 750 * Math.random()).toFixed(3)),
                            y: parseFloat((this.y - 750 * Math.random()).toFixed(3))
                        }
                    })
                }else {
                    this.baseShape.push({
                        pointName: String.fromCharCode(97 + i),
                        pointVal: {
                            x: parseFloat((this.x - 750 * Math.random()).toFixed(3)),
                            y: parseFloat((this.y + 750 * Math.random()).toFixed(3))
                        }
                    })
                }
            }
        }

        for(let i = this.edgeCount; i < 300; i+=this.edgeCount) {
            for(let j = this.edgeCount; j > 0; j--){
                this.baseShape.push({
                    pointName: String.fromCharCode(97 + this.edgeCount + i),
                    pointVal: {
                        x: lerp1D(this.baseShape[i - j].pointVal.x, this.baseShape[i - (j-1)].pointVal.x, .05),
                        y: lerp1D(this.baseShape[i - j].pointVal.y, this.baseShape[i - (j-1)].pointVal.y, .05)
                    }
                })
            }
        }

        for(let i = 1; i <= this.baseShape.length -1; i++){
            this.linesArray.push(
                new Line(
                    i,
                    this.baseShape[i - 1].pointVal.x, 
                    this.baseShape[i - 1].pointVal.y,
                    this.baseShape[i].pointVal.x, 
                    this.baseShape[i].pointVal.y,
                    i * 255
                )
            )
        }
    }

    update(){
        // for (let i = 0; i < this.linesArray.length; i++){
        //     console.log('linesarray i id: ', this.linesArray[i].id);
        //     console.log('linesarray i . go: ', this.linesArray[i].go);
        //     if(this.linesArray[i -1].alpha == undefined) continue
        //     else if(this.linesArray[i -1].alpha >= 1) this.linesArray[i].go = true
        //     this.linesArray[i].update()
        // }
        // BREAK CONDITION si le dernier élément est fini on arrête l'update
        if(this.linesArray[this.linesArray.length-1].alpha >= 1) return 

        
        for (let i = 1; i < this.linesArray.length; i++){
            
            // console.log('linesarray i id: ', this.linesArray[i].id);
            // console.log('linesarray i . go: ', this.linesArray[i].go);
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