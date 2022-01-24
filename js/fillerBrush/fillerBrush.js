import BaseTool from "../baseTool/baseTool.js";
class FillerBrush extends BaseTool{
    constructor(canvas,ctx){
        super(canvas,ctx,"fillTool")
    }

    mouseDownFn = _ =>{
        console.log("ok");
    }

    mouseMoveFn(e){
        return
    }

    mouseUpFn(){
        return
    }
}

export default FillerBrush