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
        this.transform  = new Transform()
        const containerLayers = this.hashTable.get(this.config.getValue("currentLayerId"))
        const positionShapes = this.config.getValue("positionShapes")
        const ids = Object.keys(positionShapes)
        ids.forEach(id=>{
            id = parseInt(id)
            const layer = containerLayers.layers.getById(id)
            if(!layer) return
            const rect1 = {x: e.clientX,y: e.clientY,width: 0, height: 0}
            const {x,y,width,height} = positionShapes[id]
            const [mouseX,mouseY] = this.resetMousePosition(x,y)
            const rect2= {x: mouseX,y: mouseY,width,height}
            if(!rect2) return
            if(CollectionSquareToSquare(rect1,rect2)){
                const {canvas,ctx} = layer
                this.config.setValue("ctx",ctx)
                this.config.setValue("canvas",canvas)
                this.transform.setTransform(x,y,width,height)
            }
        })
    } 
    
}

export default MouseSelector
