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
            const rect1 = {x: e.clientX,y: e.clientY,width: 0, height: 0}
            const {x,y,width,height} = positionShapes[i]
            const rect2= {x,y,width,height}
            if(!rect2) return
            console.log(CollectionSquareToSquare(rect1,rect2))
            if(CollectionSquareToSquare(rect1,rect2)){
                const {canvas,ctx} = currentLayer
                this.config.setValue("ctx",ctx)
                this.config.setValue("canvas",canvas)
                this.transform.setTransform(x,y,width,height)
            }
            i += 1
        })
    } 
    
}

export default MouseSelector
