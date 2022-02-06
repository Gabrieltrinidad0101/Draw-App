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

    removeFunction(){
        this.functionToExecute.setMouseDownFn(_=>{})
        this.functionToExecute.setMouseMoveFn(_=>{})
        this.functionToExecute.setMouseUpFn(_=>{})
    }

    convertSizeNegativeToPositive(x,y,width,height){
        const newPositionX = width < 0 ? x + width : x
        const newPositionY = height < 0 ? y + height : y
        const newWidth = Math.abs(width)
        const newHeight = Math.abs(height)
        return [newPositionX,newPositionY,newWidth,newHeight]
    }

    setTransform(x,y,mouseX,mouseY,width,height){
        const lineWidth = this.config.getValue("lineWidth") + 7
        const centerLineWidth = this.config.getValue("lineWidth") / 2
        this.x = x - lineWidth / 2
        this.y = y - lineWidth / 2
        this.width = width + lineWidth
        this.height = height + lineWidth
        const [newPositionX,newPositionY,newWidth,newHeight] = this.convertSizeNegativeToPositive(mouseX,mouseY,width - centerLineWidth ,height)
        this.square1 = this.#createSquare(newPositionX,newPositionY,newWidth,newHeight,false)
        this.square1.addEventListener("mousemove",e=>this.moveShape(e))      
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
        div.addEventListener("mouseup",_=>{this.canTransform = false})
        this.body.appendChild(div)
        return div
    }

    updatePositionSquare(x,y){
        const methodString = `square${1}` 
        const position = this[methodString].getBoundingClientRect()
        this[methodString].style.left = `${position.x + x}px`
        this[methodString].style.top = `${position.y + y}px`
        return [position.x + x,position.y + y]
    }

    moveShape(e){
        if(!this.canTransform) return
        const newPostion = this.ctx.getImageData(this.x,this.y,this.width,this.height)
        this.ctx.clearRect(this.x,this.y,this.width,this.height)
        const [x,y] = this.updatePositionSquare(e.movementX,e.movementY)
        this.x = x - this.mainCanvas.offsetLeft - 17 / 2
        this.y = y - this.mainCanvas.offsetTop - 17 / 2
        this.ctx.putImageData(newPostion,this.x,this.y)

    }

}

export default Transform;