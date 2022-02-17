import BaseTool from "../../baseTool/baseTool.js"

class PaintBrush extends BaseTool{
    constructor(id="paintBrush"){
        super(id)
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
    }
}

export default PaintBrush