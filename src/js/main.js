import PaintBrush from "./paintBrush/paintBrush.js";
import ClearBrush from "./clearBrush/clearBrush.js";
import FillerBrush from "./fillerBrush/fillerBrush.js";
import ColorPicker from "./colorPicker/colorPicker.js"
import FunctionToExecute from "./functionToExecute.js";
import AdvancedColorPicker from "./advancedColorPicker/advancedColorPicker.js";
import MultiBrush from "./multiBrush/multiBrush.js";
import LineBrush from "./lineBrush/lineBrush.js";
import SquareBrush from "./squareBrush/squareBrush.js"
class Canvas{
    constructor(){
        //html
        this.containerCanvas = document.querySelector(".containerCanvas");
        this.canvas = document.getElementById("canvas")
        this.ctx =  this.canvas.getContext("2d")

        this.canvas.width = this.containerCanvas.clientWidth
        this.canvas.height = this.containerCanvas.clientHeight

        //set background
        this.ctx.beginPath()
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.closePath()
        
        //class
        this.functionToExecute = new FunctionToExecute()
        this.paintBrush = new PaintBrush(this.canvas,this.ctx)
        this.clearBrush = new ClearBrush(this.canvas,this.ctx)
        this.fillerBrush = new FillerBrush(this.canvas,this.ctx)
        this.colorPicker = new ColorPicker(this.canvas,this.ctx)
        this.advanceColorPicker = new AdvancedColorPicker()
        this.multiBrush = new MultiBrush(this.canvas,this.ctx)
        this.lineBrush = new LineBrush(this.canvas,this.ctx)
        this.squareBrush = new SquareBrush(this.canvas,this.ctx)
        
        //set value of default in functionToExecute
        this.functionToExecute.setMouseDownFn(e=>this.paintBrush.mouseDownFn(e),true)
        this.functionToExecute.setMouseMoveFn(e=>this.paintBrush.mouseMoveFn(e),true)
        this.functionToExecute.setMouseUpFn(e=>this.paintBrush.mouseUpFn(e),true)
        
        //events
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