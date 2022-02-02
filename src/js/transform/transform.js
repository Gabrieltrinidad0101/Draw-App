import Square from "../squareBrush/square.js";
import Config from "../config.js";
class Transform{
    constructor(canvas,ctx){
        this.body = document.body
        this.config = new Config()
    }

    center(x,y,width,height){
        return [x - width / 2, y  - height /2 ]
    }

    setTransform(x,y,width,height){
        const lineWidth = this.config.getValue("lineWidth") + 7
        const centerLineWidth = this.config.getValue("lineWidth") / 2
        const square1 = this.#createSquare(x,y,width - centerLineWidth ,height,false)
        const mimiSquare1 = this.#createSquare(x,y,lineWidth,lineWidth)
        const mimiSquare2 = this.#createSquare(x+width,y,lineWidth,lineWidth)
        const mimiSquare3 = this.#createSquare(x,y + height,lineWidth,lineWidth)
        const mimiSquare4 = this.#createSquare(x + width,y + height,lineWidth,lineWidth)        
    }

    #createSquare(x,y,width,height,center=true){
        const [centerX,centerY] = center ? this.center(x,y,width,height) : [x,y]
        const div = document.createElement('div');
        div.style.position = "fixed"
        div.style.left = centerX + "px";
        div.style.top = centerY + "px";
        div.style.width = width + "px"
        div.style.height = height + "px"
        div.style.border = "1px solid #000"
        this.body.appendChild(div)
        return div
    }

}

export default Transform;