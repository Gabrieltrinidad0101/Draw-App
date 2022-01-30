import BaseTool from "../baseTool/baseTool.js";
import Config from "../config.js"
import AdvanceColorPicker from "../advancedColorPicker/advancedColorPicker.js";
import CircleColorPicker from "./circleColorPicker.js"
class ColorPicker extends BaseTool{
    constructor(canvas,ctx){
        super(canvas,ctx,"colorPicker")
        this.config = new Config()
        this.advanceColorPicker = new AdvanceColorPicker()
        this.circleColorPicker = new CircleColorPicker()

        //methods
        this.circleColorPicker.createCircle()

        //vars
        this.canDraw = false
    }

    colorSelectionOnCanvasAndSaveInConfig(e){
        const arrayColor = this.ctx.getImageData(this.mouseX(e),this.mouseY(e),1,1).data
        const rgba = this.arrayToRgba(arrayColor)
        this.advanceColorPicker.setColor(rgba)
        this.circleColorPicker.showCircle(e.clientX,e.clientY,rgba)
    }


    mouseDownFn(e){
        this.canDraw = true
        this.colorSelectionOnCanvasAndSaveInConfig(e)
    }

    mouseMoveFn(e){
        if(this.canDraw){
            this.colorSelectionOnCanvasAndSaveInConfig(e)
        }
    }

    mouseUpFn(e){
        this.canDraw = false
        this.circleColorPicker.hiddenCirlce()
    }
    
    arrayToRgba(array){
        return `rgba(${array[0]},${array[1]},${array[2]},${array[3]})`
    }
}

export default ColorPicker