import BaseTool from "../baseTool/baseTool.js"

class PaintBrush extends BaseTool{
    constructor(canvas,ctx,id="paintBrush"){
        super(canvas,ctx,id)
    }

    mouseDownFn = e =>{
        this.canDraw = true
        this.ctx.beginPath();
        this.ctx.moveTo(this.mouseX(e),this.mouseY(e))
        this.styleLine()
    }

    mouseMoveFn(e){
        if(this.canDraw){
            this.ctx.lineTo(this.mouseX(e),this.mouseY(e))
            this.styleLine()
        }
    }

    mouseUpFn(){
        this.canDraw = false
        this.ctx.stroke()
        this.ctx.closePath();
    }
}

export default PaintBrush