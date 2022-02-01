import Square from "../squareBrush/square.js";
import Config from "../config.js";
class Transform{
    constructor(canvas,ctx){
        this.canvas = canvas
        this.ctx = ctx
        this.square= new Square(this.ctx)
        this.config = new Config()
    }

    center(x,y,width,height){
        return [x - width / 2, y  - height /2 ]
    }

    mouseX(e){
        return e.clientX - this.canvas.offsetLeft
    }

    mouseY(e){
        return e.clientY - this.canvas.offsetTop
    }

    setTransform(x,y,width,height){
        const lineWidth = this.config.getValue("lineWidth") + 7
        const centerLineWidth = this.config.getValue("lineWidth") / 2
        const square1 = this.square.create(x,y,width - centerLineWidth ,height,true)
        const mimiSquare1 = this.#mimiSquare(x,y,lineWidth,lineWidth)
        const mimiSquare2 = this.#mimiSquare(x+width,y,lineWidth,lineWidth)
        const mimiSquare3 = this.#mimiSquare(x,y + height,lineWidth,lineWidth)
        const mimiSquare4 = this.#mimiSquare(x + width,y + height,lineWidth,lineWidth)
    }

    #mimiSquare(x,y,width,height){
        const [centerX,centerY] = this.center(x,y,width,height)
        return this.square.create(centerX,centerY,width,height,true)
    }

}

export default Transform;