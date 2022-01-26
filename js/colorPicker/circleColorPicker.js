class CircleColorPicker{
    constructor(){
        this.body = document.body
    }


    #circle(){
        this.div = document.createElement("div")
        this.div.className = "circlerColorPickerStart"
        return this.div
    }
    
    createCircle(){
        this.body.appendChild(this.#circle())
    }
    
    showCircle(x,y,background){
        this.div.style.display = "block"
        this.div.style.background = background
        this.div.style.left = `${x - 15}px`
        this.div.style.top = `${y - 35}px`
    }

    hiddenCirlce(){
        this.div.style.display = "none"
    }

}

export default CircleColorPicker