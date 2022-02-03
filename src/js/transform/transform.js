import Square from "../squareBrush/square.js";
import Config from "../config.js";
class Transform{
    constructor(canvas,ctx){
        this.body = document.body
        this.config = new Config()
        this.ctx = ctx
        this.canvas = canvas
        this.canTransform = false
    }

    center(x,y,width,height){
        return [x - width / 2, y  - height /2 ]
    }

    convertSizeNegativeToPositive(x,y,width,height){
        const newPositionX = width < 0 ? x + width : x
        const newPositionY = height < 0 ? y + height : y
        const newWidth = Math.abs(width)
        const newHeight = Math.abs(height)
        return [newPositionX,newPositionY,newWidth,newHeight]
    }

    setTransform(x,y,width,height){
        const lineWidth = this.config.getValue("lineWidth") + 7
        const centerLineWidth = this.config.getValue("lineWidth") / 2
        this.x = x - lineWidth / 2
        this.y = y - lineWidth / 2
        this.width = width + lineWidth
        this.height = height + lineWidth
        x = x + this.canvas.offsetLeft
        y = y + this.canvas.offsetTop
        const [newPositionX,newPositionY,newWidth,newHeight] = this.convertSizeNegativeToPositive(x,y,width - centerLineWidth ,height)
        this.square1 = this.#createSquare(newPositionX,newPositionY,newWidth,newHeight,false)
        this.square2 = this.#createSquare(x,y,lineWidth,lineWidth)
        this.square3 = this.#createSquare(x+width,y,lineWidth,lineWidth)
        this.square4 = this.#createSquare(x,y + height,lineWidth,lineWidth)
        this.square5 = this.#createSquare(x + width,y + height,lineWidth,lineWidth)  
        this.square1.addEventListener("mousemove",e=>this.moveShape(e))      
    }

    #createSquare(x,y,width,height,center=true){
        const [centerX,centerY] = center ? this.center(x,y,width,height) : [x,y]
        const div = document.createElement('div');
        div.className = "squareInterfaces"
        div.style.left = `${centerX}px`;
        div.style.top = `${centerY}px`;
        div.style.width = `${width}px`
        div.style.height = `${height}px`
        div.addEventListener("mousedown",_=>this.canTransform = true)
        div.addEventListener("mouseup",_=>{this.canTransform = false; console.log("ok");})
        this.body.appendChild(div)
        return div
    }

    updatePositionSquare(x,y){
        for(let i = 1; i <= 5; i++){
            console.log(x);
            this[`square${i}`].style.left += `1px`
            this[`square${i}`].style.top += `1px`
        }
    }

    moveShape(e){
        if(!this.canTransform) return
        const newPostion = this.ctx.getImageData(this.x,this.y,this.width,this.height)
        this.ctx.clearRect(this.x,this.y,this.width,this.height)
        this.updatePositionSquare(e.clientX,e.clientY)
        this.x = e.clientX - this.canvas.offsetLeft
        this.y = e.clientY - this.canvas.offsetTop
        this.ctx.putImageData(newPostion,this.x,this.y)

    }

}

export default Transform;