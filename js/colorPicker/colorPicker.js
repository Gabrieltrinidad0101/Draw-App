import BaseTool from "../baseTool/baseTool.js";
import Config from "../config.js"
class ColorPicker extends BaseTool{
    constructor(canvas,ctx){
        super(canvas,ctx,"colorPicker")
        this.config = new Config()
        this.canDraw = false
    }

    mouseDownFn(){
        this.canDraw = true
    }

    mouseMoveFn(e){
        if(this.canDraw){
            const arrayColor = this.ctx.getImageData(this.mouseX(e),this.mouseY(e),1,1).data
            this.config.setValue("color",this.arrayToRgba(arrayColor))
        }
    }

    mouseUpFn(){
        this.canDraw = false
    }
    
    arrayToRgba(array){
        let colorStr = ""
        array.map(color=> colorStr += `${color},`)
        return `rgba(${colorStr})`
    }
}

export default ColorPicker