import FunctionToExecute from "../functionToExecute.js"
import GlobalVariables from "../../globalVariables.js"
import Position from "../Position/position.js"

const buttons = []
let currentButton = null
class BaseTool extends Position{
    constructor(button){
        super()
        //vars
        this.button = button
        this.functionToExecute = new FunctionToExecute()
        this.globalVariables = new GlobalVariables()
        this.mainCanvas = this.globalVariables.getValue("mainCanvas")
        this.button.addEventListener("click",e=>this.setFunctions(e))
        this.getCanvasAndContext()
        buttons.push(this.button)
    }
    
    changeTool(cb){
        currentButton = this.button
        buttons.forEach(button=>{
            const callBack = _=>{
                if(currentButton === "finish"){
                    button.removeEventListener("click",callBack)
                    return
                }
                if(currentButton === button) return
                cb()
                currentButton = "finish"
            }
            button.addEventListener("click",callBack)
        })
    }

    getCanvasAndContext(){
        this.ctx = this.globalVariables.getValue("ctx")
        this.canvas = this.globalVariables.getValue("canvas")
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
        this.ctx.strokeStyle = this.globalVariables.getValue("color")
        this.ctx.lineWidth = this.globalVariables.getValue("lineWidth")
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

    prevent(cb){
        cb()
    }

    setFunctions(e){
        this.click ? this.click(e) : ""
        this.getCanvasAndContext()
        this.functionToExecute.setMouseDownFn(e=>this.mouseDownFn ? 
            this.prevent(_=>this.mouseDownFn(e)) : _=>{})
        this.functionToExecute.setMouseMoveFn(e=>this.mouseMoveFn ?
            this.prevent(_=>this.mouseMoveFn(e)) : _=>{})
        this.functionToExecute.setMouseUpFn(e=>this.mouseUpFn ? 
            this.prevent(_=>this.mouseUpFn(e)): _=>{})
    }

}

export default BaseTool