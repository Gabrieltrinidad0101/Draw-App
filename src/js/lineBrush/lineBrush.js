import PaintBrush from "../paintBrush/paintBrush.js"
class LineBrush extends PaintBrush{
    constructor(canvas,ctx){
        super(canvas,ctx,"lineBrush")
        this.canDraw = false
    }
    
    mouseDownFn = e =>{
        this.canDraw= true
        this.posStartX = this.mouseX(e)
        this.posStartY = this.mouseY(e)
        this.background = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
    }
    
    mouseMoveFn(e){
        if(this.canDraw){
            this.ctx.putImageData(this.background,0,0)
            this.ctx.beginPath();
            this.styleLine()
            this.ctx.moveTo(this.posStartX,this.posStartY)
            this.ctx.lineTo(this.mouseX(e),this.mouseY(e))
            this.ctx.stroke()
            this.ctx.closePath()
        }
    }

    mouseUpFn(e){
        this.canDraw = false
    }

}

export default LineBrush