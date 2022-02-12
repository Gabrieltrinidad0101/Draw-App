import Config from "../../config.js";
import FunctionToExecute from "../functionToExecute.js";
import SquareInterfaces from "../squareInterfaces/squareInterfaces.js";
class Transform{
    constructor(){
        this.config = new Config()
        this.mainCanvas = this.config.getValue("mainCanvas")
        this.canTransform = false
        this.functionToExecute = new FunctionToExecute()
        this.squareInterfaces = new SquareInterfaces()
    }

    getCanvasAndContext(){
        this.ctx = this.config.getValue("ctx")
        this.canvas = this.config.getValue("canvas")
    }

    convertSizeNegativeToPositive(x,y,width,height){
        const newPositionX = width < 0 ? x + width : x
        const newPositionY = height < 0 ? y + height : y
        const newWidth = Math.abs(width)
        const newHeight = Math.abs(height)
        return [newPositionX,newPositionY,newWidth,newHeight]
    }

    setPositionShapeInConfig(x,y){
        const positionShape = {x,y,mouseX: this.mouseX,mouseY: this.mouseY,width: this.width - this.lineWidth,height: this.height - this.lineWidth,id: this.config.getValue("currentSubLayerId")}
        const positionShapes = this.config.getValue("positionShapes") ?? []
        positionShapes.push(positionShape)
        this.config.setValue("positionShapes",positionShapes)
    }

    setTransform(x,y,mouseX,mouseY,width,height){   
        this.mouseX = x + this.mainCanvas.offsetLeft 
        this.mouseY = y + this.mainCanvas.offsetTop
        this.getCanvasAndContext()
        this.lineWidth = this.config.getValue("lineWidth") + 7
        this.x = x - this.lineWidth / 2
        this.y = y - this.lineWidth / 2
        this.width = width + this.lineWidth
        this.height = height + this.lineWidth
        const [newPositionX,newPositionY,newWidth,newHeight] = this.convertSizeNegativeToPositive(this.mouseX,this.mouseY,width ,height)
        this.square1 = this.#createSquare(newPositionX,newPositionY,newWidth,newHeight,false)
        this.square1.addEventListener("mousemove",e=>this.moveShape(e))
        this.mainCanvas.addEventListener("mousedown",this.removeSquares)
        this.setPositionShapeInConfig(x,y,width,height)
    }
    
    removeSquares = e => {
        e.stopPropagation()
        this.square1.remove()
        this.mainCanvas.removeEventListener("mousedown",this.removeSquares)
    }
    
    #createSquare(x,y,width,height,center=true){
        const square = this.squareInterfaces.create(x,y,width,height)
        square.addEventListener("mousedown",_=>this.canTransform = true)
        square.addEventListener("mouseup",_=>this.canTransform = false)
        return square
    }

    updatePositionSquare(x,y){
        const methodString = `square${1}` 
        const position = this[methodString].getBoundingClientRect() 
        console.log("ok")
        this.setPositionShapeInConfig(position.x + x,position.y + y)
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