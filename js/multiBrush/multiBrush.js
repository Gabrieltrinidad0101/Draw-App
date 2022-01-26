import PaintBrush from "../paintBrush/paintBrush.js"
class MultiBrush extends PaintBrush{
    constructor(canvas,ctx){
        super(canvas,ctx,"multiBrush")
        this.posFirstX = null
        this.posFirstY = null
    }

    mouseDownFn = e =>{
        this.canDraw= true
        this.posStartX = this.mouseX(e)
        this.posStartY = this.mouseY(e)
        if(!this.posFirstX) this.posFirstX = this.posStartX
        if(!this.posFirstY) this.posFirstY = this.posStartY
        this.background = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
    }
    
    mouseMoveFn(e){
        console.log(this.posStartX && this.posStartY);
        if(this.posStartX && this.posStartY){
            this.ctx.putImageData(this.background,0,0)
            this.ctx.beginPath();
            this.ctx.moveTo(this.posStartX,this.posStartY)
            this.ctx.lineTo(this.mouseX(e),this.mouseY(e))
            this.drawLine(e)
            this.ctx.stroke()
            this.ctx.closePath()
        }
    }

    mouseUpFn(e){
        if(this.posStartX === this.posFirstX && this.posStartY === this.posFirstY){
            this.posStartX = null
            this.posStartY = null
            this.ctx.stroke()
            this.ctx.closePath()
            return
        }
    }
}

export default MultiBrush