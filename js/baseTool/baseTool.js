import FunctionToExecute from "../functionToExecute.js"

class BaseTool{
    constructor(canvas,ctx,id){
        //vars
        this.canvas = canvas
        this.ctx =  ctx
        this.button = document.getElementById(id)
        this.functionToExecute = new FunctionToExecute()
        this.button.addEventListener("click",_=>this.setFunctions())
    }

    mouseX(e){
        return e.clientX - this.canvas.offsetLeft
    }

    mouseY(e){
        return e.clientY - this.canvas.offsetTop
    }

    
    setFunctions(){
        this.functionToExecute.setMouseDownFn(e=>this.mouseDownFn ? this.mouseDownFn(e) : "")
        this.functionToExecute.setMouseMoveFn(e=>this.mouseMoveFn ? this.mouseMoveFn(e) : "")
        this.functionToExecute.setMouseUpFn(e=>this.mouseUpFn ? this.mouseUpFn(e) : "")
    }

}

export default BaseTool