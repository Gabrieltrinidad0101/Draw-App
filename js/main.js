import PaintBrush from "./paintBrush/paintBrush.js";
import ClearBrush from "./clearBrush/clearBrush.js";
import FunctionToExecute from "./functionToExecute.js";

class Canvas{
    constructor(){
        //html
        this.containerCanvas = document.querySelector(".containerCanvas");
        this.canvas = document.getElementById("canvas")
        this.ctx =  this.canvas.getContext("2d")

        this.canvas.width = this.containerCanvas.clientWidth
        this.canvas.height = this.containerCanvas.clientHeight
        
        //class
        this.functionToExecute = new FunctionToExecute()
        this.paintBrush = new PaintBrush(this.canvas,this.ctx)
        this.clearBrush = new ClearBrush(this.canvas,this.ctx)

        //set value of default in functionToExecute
        this.functionToExecute.setFunctions(this.paintBrush)
        
        //events
        this.paintBrush.click(_=>{
            this.functionToExecute.setFunctions(this.paintBrush)
        })
        this.clearBrush.click(_=>this.functionToExecute.setFunctions(this.clearBrush))
        this.canvas.addEventListener("mousedown",e=>{
            this.functionToExecute.runMouseDownFn(e)
        })
        
        this.canvas.addEventListener("mousemove",e=>{
            this.functionToExecute.runMouseMoveFn(e)
        })
        
        this.canvas.addEventListener("mouseup",e=>{
            this.functionToExecute.runMouseUpFn(e)
        })
    }
}

new Canvas()