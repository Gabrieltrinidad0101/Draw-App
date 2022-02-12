import Config from "../../config.js";
import FunctionToExecute from "../functionToExecute.js";
import SquareInterfaces from "../squareInterfaces/squareInterfaces.js";
import Position from "../Position/position.js";
class Transform extends Position{
    constructor(){
        super();
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
        const positionShape = {x,y,width: this.width - this.lineWidth,height: this.height - this.lineWidth,id: this.config.getValue("currentSubLayerId")}
        const positionShapes = this.config.getValue("positionShapes") ?? {}
        positionShapes[positionShape.id] = positionShape
        this.config.setValue("positionShapes",positionShapes)
    }

    centerSquare1(x,y,width,height){
        const [mouseX,mouseY] = this.resetMousePosition(x,y)
        this.setPositionShapeInConfig(mouseX,mouseY,width,height)
        this.lineWidth = this.config.getValue("lineWidth") + 7
        this.x = x - this.lineWidth / 2
        this.y = y - this.lineWidth / 2
        this.width = width + this.lineWidth
        this.height = height + this.lineWidth
        return this.convertSizeNegativeToPositive(mouseX,mouseY,width ,height)
    }

    setTransform(x,y,width,height){   
        this.getCanvasAndContext()
        const [newPositionX,newPositionY,newWidth,newHeight] = this.centerSquare1(x,y,width,height)
        this.square1 = this.#createSquare(newPositionX,newPositionY,newWidth,newHeight,false)
        this.eventsOfSquares()
    }

    eventsOfSquares(){
        this.square1.addEventListener("mousemove",e=>this.moveShape(e))
        this.mainCanvas.addEventListener("mousedown",this.removeSquares) 
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
        this[methodString].style.left = `${position.x + x}px`
        this[methodString].style.top = `${position.y + y}px`
    }

    moveShape(e){
        if(!this.canTransform) return
        const newPostion = this.ctx.getImageData(this.x,this.y,this.width,this.height)
        this.ctx.clearRect(this.x,this.y,this.width,this.height)
        this.updatePositionSquare(e.movementX,e.movementY)
        const x = this.mouseX(e)
        const y = this.mouseY(e)
        this.setPositionShapeInConfig(x,y)
        this.x += e.movementX
        this.y += e.movementY
        this.ctx.putImageData(newPostion,this.x,this.y)
    }

}

export default Transform;