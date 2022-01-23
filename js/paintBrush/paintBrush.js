import Config from "../config.js"
class PaintBrush{
    constructor(canvas,ctx,id="paintBrush"){
        this.canvas = canvas
        this.ctx =  ctx
        this.buttonPaintBrush = document.getElementById(id)
        this.config = new Config()
    }

    click(cb){
        this.buttonPaintBrush.addEventListener("click",cb)
    }

    drawLine = _=>{
        this.ctx.strokeStyle = this.config.getValue("color")
        this.ctx.lineWidth = this.config.getValue("lineWidth")
        this.ctx.stroke()
    }

    mouseDownFn = e =>{
        this.canDraw = true
        this.ctx.beginPath();
        this.ctx.moveTo(e.clientX - this.canvas.offsetLeft,
                        e.clientY - this.canvas.offseTop)
        this.drawLine()
    }

    mouseMoveFn(e){
        if(this.canDraw){
            this.ctx.lineTo(e.clientX - this.canvas.offsetLeft,
                            e.clientY - this.canvas.offsetTop)
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