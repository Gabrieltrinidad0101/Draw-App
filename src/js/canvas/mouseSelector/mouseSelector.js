import BaseTool from "../baseTool/baseTool.js"
import HashTable from "../hashTable/hashTable.js"
import { CollectionSquareToSquare } from "../collisions/squareToSquare.js"
import Transform from "../transform/transform.js"
class MouseSelector extends BaseTool{
    constructor(){
        super("mouseSelector")
        this.hashTable = new HashTable()
        this.transform  = new Transform()
    }
    
    mouseDownFn(e){
        const containerLayers = this.hashTable.get(this.config.getValue("currentLayerId"))

        const positionShapes = this.config.getValue("positionShapes")
        let i = 0
        containerLayers.layers.traverse(currentLayer=>{
            const rect1 = {x: e.clientX,y: e.clientY,width: 1, height: 1}
            const rect2 = positionShapes[i]
            if(!rect2) return
            if(CollectionSquareToSquare(rect1,rect2)){
                this.transform.ctx = currentLayer.ctx
                this.transform.canvas = currentLayer.canvas

                const canvasX = this.mouseX(e.clientX)
                const canvasY = this.mouseY(e.clientY)
                const mouseX = e.clientX
                const mouseY = e.clientY

                this.transform.setTransform(canvasX,canvasY,mouseX,mouseY,rect2.width,rect2.height)
            }
            i += 1
        })
    } 
    
}

new MouseSelector()
