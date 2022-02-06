import HashTable from "../hashTable/hashTable.js"
import Config from "../config.js";
class CanvasLayers{
    constructor(canvas,ctx){
        this.canvas = canvas
        this.ctx = ctx
        this.layers = new HashTable()
        this.config = new Config()
        this.config.setValue("mainCanvas",this.canvas)

        this.#render()
    }

    #Layer(){
        this.newLayer = document.createElement('canvas');
        this.newLayer.width = this.canvas.width;
        this.newLayer.height = this.canvas.height;
        this.newCtx = this.newLayer.getContext('2d');
        this.config.setValue("canvas",this.newLayer)
        this.config.setValue("ctx",this.newCtx)
        return {ctx:this.newCtx,canvas: this.newLayer}
    }

    createNewLayer(name){
        const layer = this.#Layer()
        this.layers.add(name,this.newLayer)
        return  layer
    }

    createNewSubLayer(){
        
    }

    #render(){
        setInterval(_=>{
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
            for(let i = 0; i < this.layers.table.size; i++){
                if(this.layers.get(1)){
                    let subLayer = this.layers.get(i)
                    while(subLayer){
                        subLayer = subLayer.next
                    }
                }
            }
        },1000)
    }

    addSubLayer(id,name){
        const layer = this.layers.get(id)
        layer.add(name)
    }
}

export default CanvasLayers
