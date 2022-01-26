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

    hexToRgbaArray(hexCode,opacity=1){
        let hex = hexCode.replace('#', '');
    
        if (hex.length === 3) {
            hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
        }    

        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        /* Backward compatibility for whole number based opacity values. */
        if (opacity > 1 && opacity <= 100) {
            opacity = opacity / 100;   
        }

        return [r,g,b,opacity];
    }

    
    setFunctions(){
        this.functionToExecute.setMouseDownFn(e=>this.mouseDownFn ? this.mouseDownFn(e) : "")
        this.functionToExecute.setMouseMoveFn(e=>this.mouseMoveFn ? this.mouseMoveFn(e) : "")
        this.functionToExecute.setMouseUpFn(e=>this.mouseUpFn ? this.mouseUpFn(e) : "")
    }

}

export default BaseTool