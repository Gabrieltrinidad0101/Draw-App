import Config from "../config.js";
class Square{
    constructor(ctx){
        this.ctx = ctx
        this.config = new Config()
        this.squareDimesions = {}
    }

    create(x,y,width,height,color="#000000"){
        this.ctx.beginPath()
        this.ctx.strokeStyle = color
        this.ctx.rect(x,y,width,height)
        this.squareDimesions.x = x 
        this.squareDimesions.y = y 
        this.squareDimesions.width = width 
        this.squareDimesions.height = height
        this.ctx.stroke()
        this.ctx.closePath();
    }

    collisionInSquare(rect2){
        if (this.squareDimesions.x < rect2.x + rect2.width &&
            this.squareDimesions.x + this.squareDimesions.width > rect2.x &&
            this.squareDimesions.y < rect2.y + rect2.height &&
            this.squareDimesions.height + this.squareDimesions.y > rect2.y) {
                return true
         }
         return false
    }

}

export default Square