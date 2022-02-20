import GlobalVariables from "../../globalVariables.js";
import FunctionToExecute from "../functionToExecute.js";
import SquareInterfaces from "../squareInterfaces/squareInterfaces.js";
import Position from "../Position/position.js";

class Transform extends Position{
    constructor(){
        super();
        this.globalVariables = new GlobalVariables()
        this.mainCanvas = this.globalVariables.getValue("mainCanvas")
        this.canTransform = false
        this.functionToExecute = new FunctionToExecute()
        this.squareInterfaces = new SquareInterfaces()
    }

    convertSizeNegativeToPositive(x,y,width,height){
        const newPositionX = width < 0 ? x + width : x
        const newPositionY = height < 0 ? y + height : y
        const newWidth = Math.abs(width)
        const newHeight = Math.abs(height)
        return [newPositionX,newPositionY,newWidth,newHeight]
    }

    centerSquare1(x,y,width,height){
        const [mouseX,mouseY] = this.resetMousePosition(x,y)
        this.lineWidth = this.globalVariables.getValue("lineWidth") + 7
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        return this.convertSizeNegativeToPositive(mouseX,mouseY,width ,height)
    }

    setTransform({x,y,width,height},cb){
        this.render = squareNewDimension=>cb(squareNewDimension)
        const [newPositionX,newPositionY,newWidth,newHeight] = this.centerSquare1(x,y,width,height)
        this.square1 = this.createSquare(newPositionX,newPositionY,newWidth,newHeight,false)
        this.setSquaresEvents()
    }

    
    setSquaresEvents = _ => {
        this.square1.addEventListener("mousemove",e=>this.moveShape(e))
        this.mainCanvas.addEventListener("mousedown",e=>this.removeSquaresEvents(e))
    }

    removeSquaresEvents = e => {
        e.stopPropagation()
        this.square1.style.display = "none"
        this.mainCanvas.removeEventListener("mousedown",this.removeSquares)
    }


    
    createSquare(x,y,width,height,center=true){
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
        this.updatePositionSquare(e.movementX,e.movementY)
        this.x += e.movementX
        this.y += e.movementY
        const square = {x: this.x,y: this.y,width: this.width, height: this.height}
        this.render(square)
    }

}

export default Transform;