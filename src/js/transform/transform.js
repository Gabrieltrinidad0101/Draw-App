import Config from "../config.js";
import FunctionToExecute from "../functionToExecute.js";
class Transform{
    constructor(canvas,ctx){
        this.body = document.body
        this.config = new Config()
        this.mainCanvas = this.config.getValue("mainCanvas")
        this.ctx = ctx
        this.canvas = canvas
        this.canTransform = false
        this.functionToExecute = new FunctionToExecute()
    }

    convertSizeNegativeToPositive(x,y,width,height){
        const newPositionX = width < 0 ? x + width : x
        const newPositionY = height < 0 ? y + height : y
        const newWidth = Math.abs(width)
        const newHeight = Math.abs(height)
        return [newPositionX,newPositionY,newWidth,newHeight]
    }

    setTransform(x,y,mouseX,mouseY,width,height){
        this.lineWidth = this.config.getValue("lineWidth") + 7
        this.x = x - this.lineWidth / 2
        this.y = y - this.lineWidth / 2
        this.width = width + this.lineWidth
        this.height = height + this.lineWidth
        const [newPositionX,newPositionY,newWidth,newHeight] = this.convertSizeNegativeToPositive(mouseX,mouseY,width ,height)
        this.square1 = this.#createSquare(newPositionX,newPositionY,newWidth,newHeight,false)
        this.square1.addEventListener("mousemove",e=>this.moveShape(e))
        this.mainCanvas.addEventListener("mousedown",this.removeSquares)
    }
    
    removeSquares = _=> {
        this.square1.remove()
        this.mainCanvas.removeEventListener("mousedown",this.removeSquares)
    }
    
    #createSquare(x,y,width,height,center=true){
        const [centerX,centerY] = [x,y]
        const div = document.createElement('div');
        div.className = "squareInterfaces"
        div.style.left = `${centerX}px`;
        div.style.top = `${centerY}px`;
        div.style.width = `${width}px`
        div.style.height = `${height}px`
        div.addEventListener("mousedown",_=>this.canTransform = true)
        div.addEventListener("mouseup",_=>this.canTransform = false)
        this.body.appendChild(div)
        return div
    }

    updatePositionSquare(x,y){
        const methodString = `square${1}` 
        const position = this[methodString].getBoundingClientRect() 
        this[methodString].style.left = `${position.x + x}px`
        this[methodString].style.top = `${position.y + y}px`
    }

    moveShape(e){
        if(!this.canTransform) return
        const newPostion = this.ctx.getImageData(this.x,this.y,this.width,this.height)
        this.ctx.clearRect(this.x,this.y,this.width,this.height)
        this.updatePositionSquare(e.movementX,e.movementY)
        this.x += e.movementX
        this.y += e.movementY
        this.ctx.putImageData(newPostion,this.x,this.y)

    }

}

export default Transform;