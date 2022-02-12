import FunctionToExecute from "../functionToExecute.js"
import Config from "../../config.js"
import Position from "../Position/position.js"
class BaseTool extends Position{
    constructor(id){
        super()
        //vars
        this.button = document.getElementById(id)
        this.functionToExecute = new FunctionToExecute()
        this.config = new Config()
        this.mainCanvas = this.config.getValue("mainCanvas")
        this.button.addEventListener("click",_=>this.setFunctions())
        this.getCanvasAndContext()
    }

    getCanvasAndContext(){
        this.ctx = this.config.getValue("ctx")
        this.canvas = this.config.getValue("canvas")
    }    

    hexToRgbaArray(hexCode,opacity=255){
        let hex = hexCode.replace('#', '');
    
        if (hex.length === 3) {
            hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
        }    

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        return [r,g,b,opacity];
    }

    styleLine = _=>{
        this.ctx.save()
        this.ctx.strokeStyle = this.config.getValue("color")
        this.ctx.lineWidth = this.config.getValue("lineWidth")
        this.ctx.lineCap = "round"
        this.ctx.lineJoin = "round"
        this.ctx.stroke()
        this.ctx.restore()
    }

    resetStyleLine(){
        this.ctx.strokeStyle = "#000"
        this.ctx.lineWidth = 1
        this.ctx.lineCap = null
        this.ctx.lineJoin = null
    }

    setFunctions(){
        this.getCanvasAndContext()
        this.functionToExecute.setMouseDownFn(e=>this.mouseDownFn ? this.mouseDownFn(e) : _=>{})
        this.functionToExecute.setMouseMoveFn(e=>this.mouseMoveFn ? this.mouseMoveFn(e) : _=>{})
        this.functionToExecute.setMouseUpFn(e=>this.mouseUpFn ? this.mouseUpFn(e) : _=>{})
    }

}

export default BaseTool