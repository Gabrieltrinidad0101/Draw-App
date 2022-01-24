import Config from "../config.js"
import BaseTool from "../baseTool/baseTool.js"
class PaintBrush extends BaseTool{
    constructor(canvas,ctx,id="paintBrush"){
        super(canvas,ctx,id)
        this.config = new Config()
    }

    drawLine = _=>{
        this.ctx.strokeStyle = this.config.getValue("color")
        this.ctx.lineWidth = this.config.getValue("lineWidth")
        this.ctx.stroke()
    }

    mouseDownFn = e =>{
        this.canDraw = true
        this.ctx.beginPath();
        this.ctx.moveTo(this.mouseX(e),this.mouseY(e))
        this.drawLine()
    }

    mouseMoveFn(e){
        if(this.canDraw){
            this.ctx.lineTo(this.mouseX(e),this.mouseY(e))
            this.drawLine(e)
        }
    }

    mouseUpFn(){
        this.canDraw = false
        this.ctx.stroke()
        this.ctx.closePath();
    }
}

export default PaintBrush