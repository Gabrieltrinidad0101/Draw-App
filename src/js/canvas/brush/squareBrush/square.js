import Config from "../../../config.js";
class Square{
    constructor(ctx){
        this.ctx = ctx
        this.config = new Config()
        this.squareDimesions = {}
    }

    create(x,y,width,height,defaultStyle){
        this.ctx.beginPath()
        this.ctx.rect(x,y,width,height)
        this.squareDimesions.x = x 
        this.squareDimesions.y = y 
        this.squareDimesions.width = width 
        this.squareDimesions.height = height
        if(defaultStyle){
            this.ctx.stroke()
        }
        this.ctx.closePath();
        return this.#copyDimesions()
    }

    #copyDimesions(){
        return {x: this.squareDimesions.x,
                y: this.squareDimesions.y,
                width: this.squareDimesions.width,
                height: this.squareDimesions.height
            }
    }


    collision(rect1,rect2){
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
                return true
         }
         return false
    }

}

export default Square