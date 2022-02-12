class Position{
    mouseX(e){
        return e.clientX - this.mainCanvas.offsetLeft
    }

    mouseY(e){
        return e.clientY - this.mainCanvas.offsetTop
    }

    resetMousePosition(x,y){
        return [x + this.mainCanvas.offsetLeft, y + this.mainCanvas.offsetTop]
    }
}

export default Position