import PaintBrush from "../paintBrush/paintBrush.js"
class ClearBrush extends PaintBrush{
    constructor(){
        super(`<i class="fas fa-eraser">`)
    }
    
    styleLine = _=>{
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = this.globalVariables.getValue("lineWidth")
        this.ctx.stroke()
    }
}

export default ClearBrush