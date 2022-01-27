import BaseTool from "../baseTool/baseTool.js";
import Square from "./square.js";
class SquareBrush extends BaseTool{
    constructor(canvas,ctx){
        super(canvas,ctx,"squareBrush")
        this.canDraw = false
        this.square = new Square(this.ctx)
    }


    mouseDownFn(e){
        this.canDraw = true
        this.posStartX = this.mouseX(e)
        this.posStartY = this.mouseY(e)
        this.background = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
    }


    getWidthAndHeiht(e){
        return [this.mouseX(e) - this.posStartX,this.mouseY(e) - this.posStartY]
    }


    mouseMoveFn(e){
        if(this.canDraw){
            this.ctx.putImageData(this.background,0,0)
            const [width,height] = this.getWidthAndHeiht(e)
            this.square.create(this.posStartX,this.posStartY,width,height)
        }
    }

    mouseUpFn(e){
        this.canDraw = false
    }





}

export default SquareBrush