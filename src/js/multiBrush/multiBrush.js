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
        const mousePosition = {x: this.posStartX, y: this.posStartY,width: 1,height: 1}
        const isCollision = this.square.collisionInSquare(mousePosition)
        if(isCollision) return true
    }

    mouseDownFn = e =>{
        this.canDraw = true
        this.posStartX = this.mouseX(e)
        this.posStartY = this.mouseY(e)
        const result = this.endLine()
        if(result){
            this.canDraw = false
            this.posFirstX = null
            this.posFirstY = null
            return
        }
        if(!this.posFirstX) this.posFirstX = this.posStartX
        if(!this.posFirstY) this.posFirstY = this.posStartY
        this.background = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
    }
    
    mouseMoveFn(e){
        if(this.posStartX && this.posStartY && this.canDraw){
            this.ctx.putImageData(this.background,0,0)
            this.ctx.beginPath();
            this.styleLine()
            this.ctx.moveTo(this.posStartX,this.posStartY)
            this.ctx.lineTo(this.mouseX(e),this.mouseY(e))
            this.ctx.stroke()
            this.ctx.closePath()
            this.makeSquare()
        }
    }

    makeSquare(){
        this.resetStyleLine()
        const width = this.config.getValue("lineWidth") + 10
        const height = this.config.getValue("lineWidth") + 10
        const x = this.posFirstX - width / 2
        const y = this.posFirstY - height / 2
        this.square.create(x,y,width,height)
    }

    mouseUpFn = null

}

export default MultiBrush