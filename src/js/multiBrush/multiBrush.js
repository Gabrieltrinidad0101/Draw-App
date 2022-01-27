import PaintBrush from "../paintBrush/paintBrush.js"
import Square from "../squareBrush/square.js"
class MultiBrush extends PaintBrush{
    constructor(canvas,ctx){
        super(canvas,ctx,"multiBrush")
        this.posFirstX = null
        this.posFirstY = null
        this.square = new Square(this.ctx)
    }

    endLine(){
        if(!this.posFirstX && !this.posFirstX) return
        this.square.create(this.posFirstX,this.posFirstY)
        if(this.posStartX >= this.posFirstX + 10 && 
            this.posStartX <= this.posFirstX - 10 &&
            this.posStartY >= this.posFirstY - 10 && 
            this.posStartY <= this.posFirstY + 10 
            ){
                console.log("click");
            }
    }

    mouseDownFn = e =>{
        this.canDraw = true
        this.posStartX = this.mouseX(e)
        this.posStartY = this.mouseY(e)
        this.endLine()
        if(!this.posFirstX) this.posFirstX = this.posStartX
        if(!this.posFirstY) this.posFirstY = this.posStartY
        this.background = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
    }
    
    mouseMoveFn(e){
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

}

export default MultiBrush