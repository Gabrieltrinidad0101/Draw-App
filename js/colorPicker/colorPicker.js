import BaseTool from "../baseTool/baseTool.js";
import Config from "../config.js"
import AdvanceColorPicker from "../advancedColorPicker/advancedColorPicker.js";
class ColorPicker extends BaseTool{
    constructor(canvas,ctx){
        super(canvas,ctx,"colorPicker")
        this.config = new Config()
        this.advanceColorPicker = new AdvanceColorPicker()
        this.canDraw = false
    }

    mouseDownFn(){
        this.canDraw = true
    }

    mouseMoveFn(e){
        if(this.canDraw){
            const arrayColor = this.ctx.getImageData(this.mouseX(e),this.mouseY(e),1,1).data
            const rgba = this.arrayToRgba(arrayColor)
            this.advanceColorPicker.setColor(rgba)
        }
    }

    mouseUpFn(){
        this.canDraw = false
    }
    
    arrayToRgba(array){
        return `rgba(${array[0]},${array[1]},${array[2]},${array[3]})`
    }
}

export default ColorPicker