import Config from "../config.js";
class Square{
    constructor(ctx){
        this.ctx = ctx
        this.config = new Config()
    }

    create(x,y,width=30,height=30){
        this.ctx.beginPath()
        this.ctx.strokeStyle = this.config.getValue("color")
        this.ctx.rect(x,y,width,height)
        this.ctx.stroke()
        this.ctx.closePath();
    }

}

export default Square