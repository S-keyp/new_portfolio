import AbstractShape from "./abstract/AbstractShape";
import { lerp1D } from "../utils/MathFunc";

export default class RandomShape extends AbstractShape {
    constructor(x: number, y: number, edgeCount: number){
        super(x, y, edgeCount)
    }

    createShape(): void {
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

        for(let i = this.edgeCount; i < 2500; i+=this.edgeCount) {
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