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

    mouseDownFn(e){
    } 
    
}

export default MouseSelector
