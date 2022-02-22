import BaseTool from "../baseTool/baseTool.js"
import mouseSelectorButton from "./mouseSelectorButton.js"
class MouseSelector extends BaseTool{
    constructor(){
        const button = mouseSelectorButton()
        super(button)
    }

    setSquareInterfaces(squareInterfaces){
        const hasSquareInterfaces = document.querySelector(".hasSquareInterfaces")
        if(hasSquareInterfaces){
            hasSquareInterfaces.style.opacity = "0"
            hasSquareInterfaces.classList.remove("hasSquareInterfaces")
        }
        squareInterfaces.style.opacity = "1"
        squareInterfaces.classList.add("hasSquareInterfaces")
    }

    click(){
        const squaresInterfaces = document.querySelectorAll(".squareInterfaces")
        squaresInterfaces.forEach(squareInterfaces=>{
            squareInterfaces.style.display = "block"
            squareInterfaces.style.opacity = "0"
            squareInterfaces.addEventListener("mousedown",_=> this.setSquareInterfaces(squareInterfaces))
        })
    }
}

export default MouseSelector
