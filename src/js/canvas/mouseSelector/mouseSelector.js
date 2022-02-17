import BaseTool from "../baseTool/baseTool.js"
import HashTable from "../hashTable/hashTable.js"
import { CollectionSquareToSquare } from "../collisions/squareToSquare.js"
import Transform from "../transform/transform.js"
import Square from "../brush/squareBrush/square.js"

class MouseSelector extends BaseTool{
    constructor(){
        super("mouseSelector")
        this.hashTable = new HashTable()
    }

    click(){
        const squaresInterfaces = document.querySelectorAll(".squareInterfaces")
        squaresInterfaces.forEach(squareInterfaces=>{
            squareInterfaces.style.display = "block"
            squareInterfaces.style.opacity = "0"
            squareInterfaces.addEventListener("mousedown",_=>squareInterfaces.style.opacity = "1")
        })
    }
}

export default MouseSelector
