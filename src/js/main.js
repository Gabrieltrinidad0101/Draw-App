import PaintBrush from "./Brush/paintBrush/paintBrush.js";
import ClearBrush from "./Brush/clearBrush/clearBrush.js";
import FillerBrush from "./Brush/fillerBrush/fillerBrush.js";
import MultiBrush from "./Brush/multiBrush/multiBrush.js";
import LineBrush from "./Brush/lineBrush/lineBrush.js";
import SquareBrush from "./Brush/squareBrush/squareBrush.js";
import ColorPicker from "./colorPicker/colorPicker.js"
import FunctionToExecute from "./functionToExecute.js";
import AdvancedColorPicker from "./advancedColorPicker/advancedColorPicker.js";
import Config from "./config.js";
import CanvasLayers from "./CanvasLayers/canvasLayers.js";
class Canvas{
    constructor(){
        this.canvasLayers = new CanvasLayers()
        const newLayer = this.canvasLayers.createNewLayer("canvas")
        this.canvas = newLayer.canvas
        this.ctx = newLayer.ctx

        //set background
        this.ctx.beginPath()
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.closePath()

        //set context and canvas in config
        this.config = new Config()
        this.config.setValue("canvas",this.canvas)
        this.config.setValue("ctx",this.ctx)
        
        //class
        this.functionToExecute = new FunctionToExecute()
        this.paintBrush = new PaintBrush()
        this.clearBrush = new ClearBrush()
        this.fillerBrush = new FillerBrush()
        this.multiBrush = new MultiBrush()
        this.lineBrush = new LineBrush()
        this.squareBrush = new SquareBrush()
        this.colorPicker = new ColorPicker()
        this.advanceColorPicker = new AdvancedColorPicker()
        
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