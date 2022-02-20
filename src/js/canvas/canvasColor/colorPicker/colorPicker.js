import BaseTool from "../../baseTool/baseTool.js";
import AdvanceColorPicker from "../advancedColorPicker/advancedColorPicker.js";
import CircleColorPicker from "./circleColorPicker.js"

class ColorPicker extends BaseTool{
    constructor(){
        super("colorPicker")
        this.advanceColorPicker = new AdvanceColorPicker()
        this.circleColorPicker = new CircleColorPicker()

        //methods
        this.circleColorPicker.createCircle()

        //vars
        this.canDraw = false
    }

    colorSelectionOnCanvasAndSaveInGlobalVariables(e){
        const arrayColor = this.ctx.getImageData(this.mouseX(e),this.mouseY(e),1,1).data
        const rgba = this.arrayToRgba(arrayColor)
        this.advanceColorPicker.setColor(rgba)
        this.circleColorPicker.showCircle(e.clientX,e.clientY,rgba)
    }


    mouseDownFn(e){
        this.canvas = this.globalVariables.getValue("mainCanvas")
        this.ctx = this.globalVariables.getValue("mainCtx")
        this.canDraw = true
        this.colorSelectionOnCanvasAndSaveInGlobalVariables(e)
    }

    mouseMoveFn(e){
        if(this.canDraw){
            this.colorSelectionOnCanvasAndSaveInGlobalVariables(e)
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