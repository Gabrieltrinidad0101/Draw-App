import PaintBrush from "../paintBrush/paintBrush.js"
class ClearBrush extends PaintBrush{
    constructor(){
        super("clearBrush")
    }
    
    styleLine = _=>{
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = this.config.getValue("lineWidth")
        this.ctx.stroke()
    }
}

export default ClearBrush