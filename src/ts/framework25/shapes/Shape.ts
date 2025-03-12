import {iPosition} from "../iPosition";
import {Rgba} from "../colors/Rgba";

export abstract class Shape {
    ctx: CanvasRenderingContext2D;
    position: iPosition;
    color: Rgba;


    constructor(ctx: CanvasRenderingContext2D, position: iPosition, color: Rgba) {
        this.ctx = ctx;
        this.position = position;
        this.color = color;
    }

}
