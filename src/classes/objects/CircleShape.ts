import AbstractShape from "./abstract/AbstractLineShape";
import { lerp1D } from "../utils/MathFunc";

export default class CircleShape extends AbstractShape {
    // TODO: modify the radius with GUI
    radius: number
    angle = 2 * Math.PI / this.edgeCount

    constructor(x: number, y: number, edgeCount: number, radius= 600){
        super(x, y, edgeCount)
        this.radius = Math.random() * radius
        this.createShape()
        this.createLines()
    }

    createShape(): void {
        for(let i = 0; i < this.edgeCount; i++){
            this.baseShape.push({
                pointName: String.fromCharCode(97 + i),
                pointVal: {
                    x: this.x + this.radius * Math.cos(i * this.angle),
                    y: this.y + this.radius * Math.sin(i * this.angle)
                }
            })
        }
        for(let i = this.edgeCount; i < 1000; i+=this.edgeCount) {
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
    }
}