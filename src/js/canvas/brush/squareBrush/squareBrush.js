import Square from "./square.js";
import BaseTool from "../../baseTool/baseTool.js";
import Transform from "../../transform/transform.js"
class SquareBrush extends BaseTool{
    constructor(){
        super("squareBrush")
        this.canDraw = false
        this.canSetTransform = false
    }

    start(){
        this.square = new Square(this.ctx)
        this.transform =  new Transform(this.canvas,this.ctx) 
    }


    mouseDownFn(e){
        this.getCanvasAndContext()
        this.start()
        this.canDraw = true
        this.canSetTransform = false
        this.posStartX = this.mouseX(e)
        this.posStartY = this.mouseY(e)
        this.background = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
    }

    getWidthAndHeiht(e){
        return [this.mouseX(e) - this.posStartX,this.mouseY(e) - this.posStartY]
    }


    mouseMoveFn(e){
        if(this.canDraw){
            this.canSetTransform = true
            this.ctx.putImageData(this.background,0,0)
            const [width,height] = this.getWidthAndHeiht(e)
            this.styleLine()
            this.square.create(this.posStartX,this.posStartY,width,height)
        }
    }

    mouseUpFn(e){
        this.canDraw = false
        if(!this.canSetTransform) return
        const [width,height] = this.getWidthAndHeiht(e)
        this.transform.setTransform(this.posStartX,this.posStartY,width,height)
    }





}

export default SquareBrush