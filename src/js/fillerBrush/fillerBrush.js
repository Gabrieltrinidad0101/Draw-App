import BaseTool from "../baseTool/baseTool.js";
import FloodFile from "./floodFile.js"
class FillerBrush extends BaseTool{
    constructor(canvas,ctx){
        super(canvas,ctx,"fillTool")
        this.floodFile = new FloodFile(this.ctx)
    }

    mouseDownFn = e =>{
        const rgbaString = this.config.getValue("color")
        const rgbaArray = this.hexToRgbaArray(rgbaString)
        this.floodFile.flood(this.mouseX(e),this.mouseY(e),rgbaArray)
    }
}

export default FillerBrush