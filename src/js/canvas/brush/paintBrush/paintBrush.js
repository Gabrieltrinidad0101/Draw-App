import BaseTool from "../../baseTool/baseTool.js"
import paintButton from "./paintButton.js"
class PaintBrush extends BaseTool{
    constructor(icon=`<i class="fas fa-paint-brush"></i>`){
        const button = paintButton(icon)
        super(button)
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