import BaseTool from "../../baseTool/baseTool.js"
import FloodFile from "./floodFile.js"
class FillerBrush extends BaseTool{
    constructor(){
        const button = {
            tag: "button",
            innerHTML: `<i class="fas fa-fill-drip">`,
        }
        super(button,"leftTools")
        this.floodFile = new FloodFile(this.ctx)
    }

    mouseDownFn = e =>{
        const rgbaString = this.globalVariables.getValue("color")
        const rgbaArray = this.hexToRgbaArray(rgbaString)
        this.floodFile.flood(this.mouseX(e),this.mouseY(e),rgbaArray)
    }
}

export default FillerBrush