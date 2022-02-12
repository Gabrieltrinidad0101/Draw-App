import PaintBrush from "./canvas/brush/paintBrush/paintBrush.js";
import ClearBrush from "./canvas/brush/clearBrush/clearBrush.js";
import FillerBrush from "./canvas/brush/fillerBrush/fillerBrush.js";
import MultiBrush from "./canvas/brush/multiBrush/multiBrush.js";
import LineBrush from "./canvas/brush/lineBrush/lineBrush.js";
import SquareBrush from "./canvas/brush/squareBrush/squareBrush.js";
import ColorPicker from "./canvas/canvasColor/colorPicker/colorPicker.js"
import FunctionToExecute from "./canvas/functionToExecute.js";
import AdvancedColorPicker from "./canvas/canvasColor/advancedColorPicker/advancedColorPicker.js";
import CanvasLayers from "./canvas/canvasLayers/canvasLayers.js";
import LineWidth from "./canvas/changeLineWidth/changeLineWidth.js";
import MouseSelector from "./canvas/mouseSelector/mouseSelector.js"
class Canvas{
    constructor(){
        this.containerCanvas = document.querySelector(".containerCanvas");
        this.canvas = document.getElementById("canvas")
        this.ctx =  canvas.getContext("2d")

        this.canvas.width = this.containerCanvas.clientWidth
        this.canvas.height = this.containerCanvas.clientHeight

        this.canvasLayers = new CanvasLayers(this.canvas,this.ctx)
        this.canvasLayers.createNewLayer("canvas")
        
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
        this.lineWidth = new LineWidth()

        new MouseSelector()
        
        //events
        this.canvasLayers.createNewSubLayer()
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