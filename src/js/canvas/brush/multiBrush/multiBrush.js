import PaintBrush from "../paintBrush/paintBrush.js"
import SquareInterfaces from "../../squareInterfaces/squareInterfaces.js";
import { CollectionSquareToSquare } from "../../collisions/squareToSquare.js";
class MultiBrush extends PaintBrush{
    constructor(){
        super("multiBrush") 
        this.squareIsCreate = false
        this.square = new SquareInterfaces()
    }

    endLine(x,y){
        if(!this.squareIsCreate) return
        const endMultiBrushDimesions = this.endMultiBrush.getBoundingClientRect()
        const mousePosition = {x,y,width: 1,height: 1}
        const isCollision = CollectionSquareToSquare(endMultiBrushDimesions,mousePosition)
        if(isCollision){
            this.endMultiBrush.remove()
            return isCollision
        }
    }

    mouseDownFn = e =>{
        this.canDraw = true
        this.posStartX = this.mouseX(e)
        this.posStartY = this.mouseY(e)
        const result = this.endLine(e.clientX,e.clientY)
        if(result){
            this.canDraw = false
            this.squareIsCreate = false
            this.ctx.closePath()
            return
        }
        this.background = this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
        if(!this.squareIsCreate){
            this.makeSquare(e.clientX,e.clientY)
            this.squareIsCreate = true
        }  
    }
    
    mouseMoveFn(e){
        if(this.posStartX && this.posStartY && this.canDraw){
            this.ctx.putImageData(this.background,0,0)
            this.ctx.beginPath();
            this.ctx.moveTo(this.posStartX,this.posStartY)
            this.ctx.lineTo(this.mouseX(e),this.mouseY(e))
            this.styleLine()
        }
    }

    makeSquare(x,y){
        const paddingOfSquare = 10
        const width = this.globalVariables.getValue("lineWidth") + paddingOfSquare
        const height = this.globalVariables.getValue("lineWidth") + paddingOfSquare
        this.endMultiBrush = this.square.create(x,y,width,height,true)
        this.endMultiBrush.style.pointerEvents = "none";
    }

    mouseUpFn = null

}

export default MultiBrush