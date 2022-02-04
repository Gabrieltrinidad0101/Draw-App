import BaseTool from "../baseTool/baseTool.js";
import Square from "./square.js";
import Transform from "../transform/transform.js";
class SquareBrush extends BaseTool{
    constructor(canvas,ctx){
        super(canvas,ctx,"squareBrush")
        this.canDraw = false
        this.square = new Square(this.ctx)
        this.transform =  new Transform(this.canvas,this.ctx)
    }


    mouseDownFn(e){
        this.canDraw = true
        this.mousePositionX = e.clientX
        this.mousePositionY = e.clientY
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
            this.styleLine()
            this.square.create(this.posStartX,this.posStartY,width,height)
        }
    }

    mouseUpFn(e){
        this.canDraw = false
        const [width,height] = this.getWidthAndHeiht(e)
        const x = this.posStartX
        const y = this.posStartY
        this.transform.setTransform(x,y,this.mousePositionX,this.mousePositionY,width,height)
    }





}

export default SquareBrush