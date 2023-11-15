import AbstractShape from "./abstract/AbstractLineShape"

export default class SimpleCircle extends AbstractShape {

    alpha = 0
    radius = 10
    angle = 10
    center = {
        x: 0,
        y: 0
    }

    constructor(x = 10, y = 10, edgeCount = 1) {
        super(x, y, edgeCount)

    }

    pointCoordinate = () => {
        return {
            x: this.radius * Math.cos(this.angle),
            y: this.radius * Math.sin(this.angle)
        }
    }


}