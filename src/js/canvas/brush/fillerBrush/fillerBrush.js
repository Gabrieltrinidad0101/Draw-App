import BaseTool from "../../baseTool/baseTool.js"
import FloodFile from "./floodFile.js"
import fillerButton from "./fillerButton.js"
class FillerBrush extends BaseTool{
    constructor(){
        const button = fillerButton()
        super(button)
        this.floodFile = new FloodFile(this.ctx)
    }

    mouseDownFn = e =>{
        const rgbaString = this.globalVariables.getValue("color")
        const rgbaArray = this.hexToRgbaArray(rgbaString)
        this.floodFile.flood(this.mouseX(e),this.mouseY(e),rgbaArray)
    }
}

export default FillerBrush